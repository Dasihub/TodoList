import React from "react";
import style from './loader.scss'

class Loader extends React.Component<{}, {}>{
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={style.content}>
                <div className={style.loading}>
                    <span className={style.span}></span>
                </div>
            </div>
        )
    }
}

export default Loader