import React from 'react';
import github from '../assets/images/github.png';
import youtube from '../assets/images/youtube.png';
import podcast from '../assets/images/podcast.png';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/CardColumns';

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Git Hub',
                    subtitle :'All my works',
                    imgSrc :github,
                    link :'https://github.com/sarah-mohan',
                    selected : false
                   } ,
                   {
                    id: 1,
                    title: 'Nicky Sarah Mohan',
                    subtitle :'My LinkedIn',
                    imgSrc : youtube,
                    link :'http://www.linkedin.com/in/nicky-sarah-mohan/',
                    selected : false
                   },
                   {
                    id: 2,
                    title: 'One Tea One',
                    subtitle :'My podcast',
                    imgSrc : podcast,
                    link : 'https://theoneteaonepod.wordpress.com/',
                    selected : false
                   }  
            ]
           
        }
    }

    handleCardClick = (id, card) =>{
        console.log(id);
        let items =[...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        
        this.setState({
                items
            });

        }


        makeItems = (items) =>{
            return items.map( item =>{
                return <Card item ={item} click={(e =>this.handleCardClick(item.id,e))} key={item.id}></Card>
            });
        }

    render(){
        return(
            <Container fluid ={true}>
                <Row className = "justify-content-around">
                    <Column>
                    {this.makeItems(this.state.items)}
                    </Column>
                </Row>
            </Container>
        );
    }
}
export default Carousel;