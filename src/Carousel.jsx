import { Component } from "react";

export default class Carousel extends Component{
    state={
        active:0,

    }
    static defultProps={
        images:"http://pets-images.dev-apis.com/pets/none.jpg" 
    }
    handleIndexClick=(e)=>{

        this.setState({active: +e.target.dataset.index})

    }
    render(){
        const {images}=this.props
        const {active}=this.state
        return(
            <div className="carousel">

                <img src={images[active]} alt="animal"/>

                <div className="carousel-smaller">
                    {
                        images.map((item,index)=>(
                            <img key={item} src={item}
                            className={index===active? "active":""}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            />
                        ))
                    }

                </div>

            </div>
        )
    }
}