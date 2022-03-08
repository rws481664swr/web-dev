// export const Row = ({className})=><div className={`row ${className}`}></div>
export const Div = ({className,content})=> <div className={className}>{content}</div>
export const Span = ({className,content})=> <span className={className}>{content}</span>
export {default as ThreeCols} from "./ThreeCols";