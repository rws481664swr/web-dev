
export const Div = ({className,content})=> <div className={className}>{content}</div>
export const Span = ({className,content})=> <span className={className}>{content}</span>
export const Anchor = ({href,className,content})=> <a href={href} className={className}>{content}</a>
export {default as ThreeCols} from "./ThreeCols";

export * from './icons'