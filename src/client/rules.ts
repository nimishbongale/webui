import { RuleConfig } from '../utils/config'
import { RuleModel } from '../utils/models'
import { postData, streamData } from '../utils/restApiWrapper'

class Rules extends RuleModel {
    public static get(
        getRulePayload: any,
        onSuccess = (args?: unknown) => args,
        onError = (args?: unknown) => args,
    ) {
        const getRuleEndpoint: string = RuleConfig?.endpoints?.rules

        streamData(getRuleEndpoint, getRulePayload)
            .then((response: any) => {
                onSuccess?.(response)
            })
            .catch((error: Error) => {
                console.error(error)
                onError?.(error)
            })
    }
    public static update(): object {
        return {}
    }
    public static delete(): object {
        return {}
    }
    public static getAll(): object {
        return {}
    }
    public static new(
        newPayload: any,
        onSuccess = (args?: unknown) => args,
        onError = (args?: unknown) => args,
    ) {
        const newRuleEndpoint: string = RuleConfig?.endpoints?.rules

        postData(newRuleEndpoint, {}, newPayload)
            .then((response: any) => {
                onSuccess?.(response)
            })
            .catch((error: Error) => {
                console.error(error)
                onError?.(error)
            })
    }
    public static getLocks(): object {
        return {}
    }
    public static reduce(): object {
        return {}
    }
    public static move(): object {
        return {}
    }
    public static getHistory(): object {
        return {}
    }
    public static getDID(): object {
        return {}
    }
    public static getAnalysis(): object {
        return {}
    }
}

export { Rules }
