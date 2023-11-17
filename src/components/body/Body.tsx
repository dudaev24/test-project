import './style.css';
import group1 from "../../img/Group1.png"
import group2 from "../../img/Group2.png"
import group3 from "../../img/Group3.png"

const Body = () => {
    return <div className="body">
            <div className='body_wrapper'>
                <span className='body_text'>Что такое Ретейли ?</span>
                <div className='main_body'>
                    <div className='item-1'>
                        <img src={group1} alt="" />
                        <span style={{color: 'blue'}}>Более 400 точек </span>
                            розничной торговли, ежедневно оформляющие 
                            заказы через мобильное приложение
                        </div>
                    <div className='item-2'>
                        <img src={group2} alt="" />
                        Возможность заказать 
                        товары <span style={{color: 'blue'}}> у крупнейших местных производителей </span> 
                        и поставщиков на прямую без посредников
                        </div>
                    <div className='item-3'>
                        <img src={group3} alt="" />
                        <span style={{color: 'blue'}}>Персональный подход </span> к цифровизации системы 
                        закупок и продаж Вашего бизнеса
</div>
            </div>
        </div>   
    </div>
    
}

export default Body
