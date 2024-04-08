import { constant } from './../../framework/constant';
import { localConfig } from './../../framework/localConfig';
import { SkillIcon } from './skillIcon';
import { poolManager } from './../../framework/poolManager';

import { _decorator, Component, Node, Prefab } from 'cc';
import { playerData } from '../../framework/playerData';
const { ccclass, property } = _decorator;

@ccclass('SkillList')
export class SkillList extends Component {
    @property(Prefab)
    public pbSkillIcon: Prefab = null!;

    start () {
        // [3]
    }

    public init (callback?: Function) {
        let arrUnLockSkill = playerData.instance.playerInfo.arrSkill.concat();

        this.node.children.forEach((ndChild: Node)=>{
            ndChild.active = false;
        })

        if (arrUnLockSkill.length > constant.MAX_SKILL_ICON_NUM) {
            arrUnLockSkill.length = constant.MAX_SKILL_ICON_NUM;
        }
        
        arrUnLockSkill.forEach((skillInfo: any, idx: number)=>{
            let ndChild: Node;
            if (idx >= this.node.children.length) {
                ndChild = poolManager.instance.getNode(this.pbSkillIcon, this.node) as Node;
            } else {
                ndChild = this.node.children[idx];
            }

            ndChild.active = true;
            let itemInfo = localConfig.instance.queryByID("playerSkill", arrUnLockSkill[idx]);
            let scriptSkillIcon = ndChild.getComponent(SkillIcon) as SkillIcon;
            scriptSkillIcon.init(idx, itemInfo, callback);
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
