import React from 'react'
import ServiceData from '../../assets/Data/Service';
import ServiceItem from '../Services/ServiceItem';
import SectionTitle from '../SectionTitle';
import styled from 'styled-components';

const ServiceStyle = styled.div`
    padding: 1rem;

    .serviceAllItems{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
        gap: 2rem;
    }

    .sectionTitle{
        margin: 2rem 0;
    }
`
const ServiceSection = () => {
  return (
    <ServiceStyle>
       <SectionTitle title="service"/>
       <div className="serviceAllItems">
           {
               ServiceData.map((item, i)=>(
                   <ServiceItem key={i}
                    names={item.name}
                    desc={item.desc}
                    icon={item.icon}
                    />
               ))
           }
       </div>
    </ServiceStyle>
  )
}

export default ServiceSection