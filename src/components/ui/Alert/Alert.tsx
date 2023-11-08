import './index.scss'
import { X } from 'lucide-react';
import { ReactNode } from 'react'
import { AlertTypes } from '../../../types';
interface IProps {
    type?: AlertTypes;
    icon: ReactNode;
    title: string;
    discription?: string;
    children?: ReactNode;
}
const Alert = ({ type = 'default', icon, title, discription, children }: IProps) => {
    return (
        <div className={`alert-${type}`}>
            <div className="alert-header">
                <div className="title">
                    <span>{icon}</span>
                    <h4>{title}</h4>
                </div>
                <X className='close' size={25} />
            </div>
            {children ?? <p>{discription}</p>}
        </div>
    )
}

export default Alert