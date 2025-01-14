import './steps.scss'

interface StepsProps {
    steps: Array<any>
    active?: number
    size?: 'small' | 'medium' | 'large'
}

export const Steps = ({
    steps = [],
    active = 1,
    size,
    ...props
}: StepsProps) => {
    return (
        <div className={`rucio-steps ${size}`}>
            {steps.map((element, index) => {
                return index < active ? (
                    <div
                        className="step-item is-completed is-success"
                        key={index}
                        onClick={() => {
                            element[2]?.()
                        }}
                    >
                        <div className="step-marker">&#x2714;</div>
                        <div className="step-details">
                            <p className="step-title">{element[0]}</p>
                            <p>{element[1]}</p>
                        </div>
                    </div>
                ) : index === active ? (
                    <div className="step-item is-active" key={index}>
                        <div className="step-marker"></div>
                        <div className="step-details">
                            <p className="step-title">{element[0]}</p>
                            <p>{element[1]}</p>
                        </div>
                    </div>
                ) : (
                    <div className="step-item" key={index}>
                        <div className="step-marker">{index + 1}</div>
                        <div className="step-details">
                            <p className="step-title">{element[0]}</p>
                            <p>{element[1]}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
