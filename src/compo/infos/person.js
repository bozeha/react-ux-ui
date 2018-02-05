import React ,{Component} from 'react';
import guys from '../../assets/guys.jpeg'
class Person extends Component
{
    render()
    {
        return(

            <div>

                sssssssssss
                <span>
                    </span>
                    <div className='personInfo'>
                        <div className="infoBlock">
                        <span>חתך גילאים : 20-40 חבר'ה אחרי בילוי או מזמן בילוי  </span>
                        <span>סוציו אקונומי  : נמוך עד בינוני מחפשים מחירים זולים לכמות מזון גדולה ומשביעה </span>
                        <span>סבלנות   : נמוכה מאוד - נובע מרעב גבוה ומאנצס   </span>
                        </div>
                        <img src={guys}/>
                    </div>
                </div>
        )
    }
}

export default Person