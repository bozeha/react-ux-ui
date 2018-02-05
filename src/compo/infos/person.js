import React ,{Component} from 'react';
import guys from '../../assets/guys.jpeg'
class Person extends Component
{
    render()
    {
        return(

            <li>

                sssssssssss
                <span>
                    </span>
                    <div>
                        <span>חתך גילאים : 20-40 חבר'ה אחרי בילוי או מזמן בילוי  </span>
                        <span>סוציו אקונומי  : נמוך עד בינוני מחפשים מחירים זולים לכמות מזון גדולה ומשביעה </span>
                        <span>סבלנות   : נמוכה מאוד - נובע מרעב גבוה ומאנצס   </span>
                        <img src={guys}/>
                    </div>
                </li>
        )
    }
}

export default Person