import "./index.css"
import ServiceCard from "../serviceCard/index.jsx"
import {assets} from "../assets/asset"
 const details=[
    {
        id:1,
        imgUrl:assets.img1,
        title:'Software Development',
        description:'From custom applications to intricate systems,we create solutions aligned with your unique needs,harnessing technology to drive efficiency and innovation.'
    },
    {
        id:2,
        imgUrl:assets.img2,
        title:'Custom Software Development',
        description:'Crafting tailored applications addressing specific client needs and industry requirements.'
    },
    {
        id:3,
        imgUrl:assets.img3,
        title:'Mobile App Development',
        description:'Building Applications for IOS,Android,or cross-platform usage,ensuring user-friendly experiences.'
    },
    {
        id:4,
        imgUrl:assets.img3,
        title:'Web Development',
        description:'Creating websites,web applications,and portals that are dynamic,responsive,and engaging.'
    },
    {
        id:5,
        imgUrl:assets.img4,
        title:'Digital Marketing Services',
        description:'Our strategic approach to SEO,engaging content,and targeted campaigns amplifies your online presence,driving meaningful engagement and conversions.'
    },
    {
        id:6,
        imgUrl:assets.img10,
        title:'SEO and SEM',
        description:'Optimizing websites and managing paid advertising to improve online visibility and drive targeted traffic.'
    },
    {
        id:7,
        imgUrl:assets.img5,
        title:'Socail Media Marketing',
        description:'Engaging with audiences,building brand presence,and promoting services across various social platforms.'
    },
    {
        id:8,
        imgUrl:assets.img5,
        title:'Content Marketing',
        description:'Creating valuable content to attract,inform,and engage with the target audience'

    },
    {
        id:9,
        imgUrl:assets.img6,
        title:'Consulting And Advisory Services',
        description:'We offer guidance in navigating the digital landscape,stratezing,implementing,and managing projects to achieve your vision.'
    },
    {
        id:10,
        imgUrl:assets.img7,
        title:'IT Strategy and Planning',
        description:'Assisting clients in developing technology roadmaps alligned with their business goals and industry standards'
    },
    {
        id:11,
        imgUrl:assets.img8,
        title:'Technology Consulting',
        description:'Offering guidance on technology adoption,integration,and implementation for optimized performance.'
    },
    {
        id:12,
        imgUrl:assets.img9,
        title:'Project Management',
        description:'Overseeing IT projects,ensuring successful delivery within specified timelines and budgets'
    }

]
const Services = () => {
    return (
      <div className="services-bg-section">
        <div className="services-wrapper">
            <div className="heading-container">
            <h2 className="services-heading">Services</h2>
            </div>
        </div>
        <div className="services-container">
          {details.map((service) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} imgUrl={service.imgUrl}/>
          ))}
        </div>
      </div>
    );
  };
  
export default Services;