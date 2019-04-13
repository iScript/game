import Tween from './tween.js'

let animationId = -1
let stoppedAnimationId = animationId - 1

const customAnimation = exports.customAnimation = {};

customAnimation.to = function (duration, from, to, type, delay, completeCallback) {
    for (let prop in to) {
        setTimeout(function (prop) {
            return function () {
                TweenAnimation(from[prop], to[prop], duration, type, (value, complete) => {
                    from[prop] = value      //每次改变数值
                    if (complete && completeCallback) {
                        completeCallback(value)
                    }
                })
            }
        }(prop), delay * 1000)
      }
}

const TweenAnimation = exports.TweenAnimation = function TweenAnimation(from, to, duration, type, callback) {
    const selfAnimationId = ++animationId
    
    const frameCount = Math.ceil(duration * 1000 / 17)  //如一千毫秒除以17，大概每秒60帧，每帧17毫秒，标准帧数
    let start = -1
   
    const startTime = Date.now()
    let lastTime = Date.now()

    //如果没传默认
    const options = {
        callback: function () {},
        type: 'Linear',
        duration: 300
    }

    //如果有传，则覆盖
    if (callback) {
        options.callback = callback
    }

    if (type) {
        options.type = type
    }

    if (duration) {
        options.duration = duration
    }

    var arrKeyTween = options.type.split('.')

    let tweenFn

    if (arrKeyTween.length == 1) {
        tweenFn = Tween[arrKeyTween[0]]
    } else if (arrKeyTween.length == 2) {
        tweenFn = Tween[arrKeyTween[0]] && Tween[arrKeyTween[0]][arrKeyTween[1]]
    }
    //console.log(tweenFn)

    const step = function step() {
        const currentTime = Date.now()
        const interval = currentTime - lastTime //间隔时间
     
        let fps
        if (interval) {
            fps = Math.ceil( 1000 / interval )
        } else {
            requestAnimationFrame(step)
            return
        }

        if (fps >= 30) {
            start++
        } else {
            // 如果帧数太低，间隔时间/17，即为第几帧
            const _start = Math.floor(interval / 17)
            start = start + _start
        }


        const value = tweenFn(start, from, to - from, frameCount)


        if (start <= frameCount && selfAnimationId > stoppedAnimationId ) {
        // start<=frameCount,说明动画还没走完，动画继续
            options.callback(value)
            requestAnimationFrame(step)
        } else if (start > frameCount && selfAnimationId > stoppedAnimationId ) {
        // 动画结束
            options.callback(to, true)  //返回数值和true动画完成
        }

        lastTime = Date.now()
    
    }
    step()
}

// 停止所有动画
// 动画的条件是selfAnimationId > stoppedAnimationId ，将stoppedAnimationId赋值后就大于等于了，就不执行了
const stopAllAnimation = exports.stopAllAnimation = function stopAllAnimation () {
    stoppedAnimationId = animationId
}