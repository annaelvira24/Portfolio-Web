import React from 'react';
import styled from 'styled-components';

import Sorting from '../assets/img/Portfolio/sorting.png';
import Sunda from '../assets/img/Portfolio/sundatranslator.png';
import Chocolate from '../assets/img/Portfolio/chocolate.png';
import Factory from '../assets/img/Portfolio/factory.png';
import Jabar from '../assets/img/Portfolio/jabar.png';
import SportApp from '../assets/img/Portfolio/sportapp.png';

import Cooking from '../assets/img/Portfolio/happy-update.png';
import Nea from '../assets/img/Portfolio/nea-update.png';
import InvesWeb from '../assets/img/Portfolio/inves-web.png';
import InvesApp from '../assets/img/Portfolio/inves-app.png';

import Codemy from '../assets/img/Portfolio/codemy-book.png';
import ITBMUN from '../assets/img/Portfolio/itbmun-update.png';
import Arkav from '../assets/img/Portfolio/arkav.png';
import Deer from '../assets/img/Portfolio/deer.png';

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (max-width: 1060px){
        flex-direction: column;
    }
`;

const Card = styled.div`
    cursor: pointer;
    width: 47%;
    margin: 20px 8px;

    @media only screen and (max-width: 1060px){
        width: 98%;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    border-radius: 15px;
    height: auto;


    img{
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        max-width: 100%;
        overflow: hidden;
        height: auto;
        transition: 0.5s;
    }

    >.desc{
        background-color: rgba(227,247,255,.9);
        position: absolute;
        bottom: 4px;
        left: 0;
        width: 100%;
        border-radius: 0px 0px 15px 15px;
        margin-bottom: 0px;
        padding-bottom: 20px;
        text-align: center;
    }

    h3{
        font-size: 20px;
        color: #3F4648;
        margin-top: 10px;
    }

    p{
        font-size: 14px;
        padding: 0px 30px 0px 30px;
        margin-top: -10px;
        margin-bottom: 20px;
        color: #3F4648;
    }

    span{
        color: white;
        background: #0085AF;
        border-radius: 20px;
        padding: 2px 15px 2px 15px;
        margin: 0px 5px 0px 5px;
    }

    &:hover{
        img{
            box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.3);
        }
    }

    @media only screen and (max-width: 512px){
        h3{
            font-size: 16px;
        }

        p{
            padding: 0px 20px 0px 20px;
            font-size: 12px;
        }

        span{
            font-size: 14px;
        }
    }
`;

export class Contents extends React.Component{
    constructor({props}){
        super(props);
        this.state = {
            open: false,
            mappingContent: {
                'code': [
                            {
                                image:Sunda,
                                title:"Sundanese Translator",
                                desc:"A web-based application to translate Indonesian to Sundanese and vise versa. Use string matching algorithm to match and search keywords.",
                                tech:["python", "flask", "html", "css"],
                                link:"https://github.com/annaelvira24/Simple-Sundanese-Translator"
                            },
                            {
                                image:Sorting,
                                title:"Sorting Tutorial",
                                desc:"A web-based application to learn about sorting algorithms and how they work.",
                                tech:["python", "flask", "vuejs"],
                                link:"https://github.com/annaelvira24/Sorting-Tutorial"
                            },
                            {
                                image:Chocolate,
                                title:"Chocolate E-Commerce",
                                desc:"A web-based application that act as an e-commerce which sells chocolates. Users can take a look and buy many kinds of chocolates.",
                                tech:["html", "css", "javascript", "php"],
                                link:"https://github.com/annaelvira24/IF3110-willy-wangkys-web"
                            },
                            {
                                image:Factory,
                                title:"Chocolate Factory",
                                desc:"A web-based application that serves and monitors supplies for chocolate e-commerce.",
                                tech:["reactjs", "nodejs", "mysql"],
                                link:"https://github.com/annaelvira24/IF3110-willy-wangkys-factory"
                            },
                            {
                                image:Jabar,
                                title:"Jabar Survei",
                                desc:"Crowdsourcing website that facilitate users to create survey and collect responses.",
                                tech:["reactjs", "bootstrap", "nodejs", "mysql"],
                                link:"https://github.com/annaelvira24/jds1-jabarsurvei"
                            },
                            {
                                image:SportApp,
                                title:"Sport App",
                                desc:"An android application which provide users with latest sport news and save the users exercises records.",
                                tech:["android", "kotlin"],
                                link:"https://github.com/annaelvira24/Workout-SportApp"
                            }
                        ],
                'uiux': [
                            {
                                image:Cooking,
                                title:"Happy Cooking",
                                desc:"App to search and share thousands of recipes",
                                tech:["adobe photoshop"]
                            },
                            {
                                image:Nea,
                                title:"Redesign NEA Singapore Web",
                                desc:"Redesigned NEA Singapore user interface website.",
                                tech:["website", "adobe XD"]
                            },
                            {
                                image:InvesWeb,
                                title:"Redesign Invesproperti Web",
                                desc:"Redesigned Invesproperti user interface website.",
                                tech:["website", "figma"]
                            },
                            {
                                image:InvesApp,
                                title:"Redesign Invesproperti Mobile App",
                                desc:"Redesigned Invesproperti user interface mobile app.",
                                tech:["android app", "figma"]
                            }
                    ],
                'design': [
                            {
                                image:Deer,
                                title:"Deer",
                                desc:"Just a photoshop art for fun",
                                tech:["adobe photoshop", "random"]
                            },
                            {
                                image:Codemy,
                                title:"Codemy Book",
                                desc:"A programming tutorial book produced by Himpunan Mahasiswa Informatika (HMIF) ITB",
                                tech:["content", "illustration", "book cover"]
                            },
                            {
                                image:ITBMUN,
                                title:"ITBMUN 2020",
                                desc:"An international model united nations competition holds by GMUNC ITB",
                                tech:["poster", "logo", "social media"]
                            },
                            {
                                image:Arkav,
                                title:"Arkavidia 7.0",
                                desc:"An annual event holds by Himpunan Mahasiswa Informatika (HMIF) ITB",
                                tech:["logo", "grand design", "isometric"]
                            }
                    ]
            }
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    

    CardContent(props){
        return(
            <Card onClick = {() => this.openModal(props)}>
                <ImageContainer>
                    <img src={props.image} alt="portfolio"/>
                    <div className="desc">
                        <h3>{props.title}</h3>
                        <p>{props.desc}</p>
                        {props.tech.map(item => (
                            <span>{item}</span>    
                        ))}
                    </div>
                </ImageContainer>
            </Card>
        )
    }

    toggleModal() {
        this.setState({ open: !this.state.open })
    }

    openModal(props){
        this.props.selectContent({
            image: props.image,
            link: props.link
        })
    }

    render(){
        var content;
        content = 
            <div>
                <Row>
                    {this.state.mappingContent[this.props.now].map(content => (
                        this.CardContent({
                            image: content.image,
                            title: content.title,
                            desc: content.desc,
                            tech: content.tech,
                            link: content.link
                        })
                    ))}
                </Row>
            </div>
        return(
            <div>
                {content}
            </div>
        )
    }
}