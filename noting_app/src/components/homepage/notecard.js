import React from 'react'
import "./notecard.css"

const Notecard = ({menuData}) => {
    console.log(menuData)

  return (

    
    <div>
        <section className="main-card--cointainer">


        {menuData.map((curElem) => {

            const {email, title, notes,time,date}=curElem;


            return (
                <>

                    <div className="card-container">

                        <div className="card">
                            <div className="card-body">
                                <span className="card-author subtle" style={{ color: "red" }}>{date}</span>
                                <span className="card-author subtle" style={{ color: "red" }}>{time}</span>
                                <h2 className="card-title">{title}</h2>
                                <span className="card-description subtle">{notes}</span>

                            </div>
                            
                        </div>

                    </div>


                </>

            )
        })
        }

        </section>
    </div>
  )
}

export default Notecard