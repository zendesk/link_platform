import { h } from 'preact';
import { createComponent } from 'preact-fela';
import Layout from './Layout';

const Spacer = createComponent(() => ({
	height: '10px'
}));

const Logo = createComponent(() => ({
    margin: "15px 5px 5px 8px",
    width: "200px"
}), "img");

const Inset = createComponent(() => ({
    backgroundColor: "#fff",
    borderRadius: "3px",
    border: "1px solid #DDD",
    padding: "7px",
    width: "100%",
    textAlign: "left",
    WebkitBoxSizing: "border-box",
    boxSizing: "border-box",
    margin: "0 auto",
    color: "#666"
}));

const Credits = createComponent(() => ({
    fontSize: "6px",
    color: "#ACACAC",
    textAlign: "center"
}), "p");

const About = ({ description, logoUrl }) => (
    <Layout>
    <Logo src="/link-sf.png"/>
    <Inset>
        <p>
        Link-SF is San Francisco’s first mobile-optimized website that connects homeless and low-income residents with critical and life-saving resources nearby.  Focusing on basic services such as food, shelter, medical care, hygiene services, and technology access, Link-SF utilizes cutting-edge technology to stream the most up-to-date information to the people who need it most.  Link-SF was designed with three user groups in mind:  1) A growing population of low-income San Franciscans who rely on mobile technology to meet their basic needs, 2) Service providers who can use the most real-time data to direct clients in need, and 3) Everyday people who can use this information as a way to help refer San Francisco’s homeless population to a social service agency nearby.
        </p>
        <p>
        <a href="http://www.stanthonysf.org/">St. Anthony Foundation</a> and Zendesk designed and implemented Link-SF.  This collaboration emerged as a result of the Community Benefits Agreement within the Mid-Market revitalization project in the city of San Francisco.  St. Anthony’s Tenderloin Technology Lab reached out to the tech community after observing an increase in the use of smart phones by low-income residents. Link-SF is a result of this process and is an attempt to use mobile technology to assist those most in need.
        </p>
        <p>
        The <a href="http://www.tenderlointechnologylab.org/">Tenderloin Technology Lab</a> (TTL), one of six programs offered by St. Anthony Foundation, works to bridge the digital divide by offering free computer training and access. The TTL is a neighborhood resource center for 100-150 people a day who are living in poverty.
        </p>
        <p>
        Data for Link-SF was primarily compiled using the information from the Homeless Advocacy Project Resource Manual as released from the <a href="http://www.sfbar.org/jdc/index.aspx">Justice &amp; Diversity Center with the Bar Association of San Francisco</a>.
        </p>
        <p>
        To bring Link-SF to the public realm, we have partnered with <a href="http://grayarea.org/about/mission/">Gray Area Art &amp; Technology</a> to produce an upcoming series of exhibits that will visualize the data from Link-SF. Gray Area applies art and technology to create positive social impact. Through education, research and public programs, Gray Area tests and scales projects with high impact potential, teaches digital tools to support artists and technologists and inspires the community by promoting meaningful new work.
        </p>
    </Inset>


    <Logo src={logoUrl}/>
    <Inset>
        {description}
    </Inset>
    <br/>
    <Credits>
        Icons by P.J. Onori, Daniel Bruce, and Dave Gandy, courtesy of <a href="http://fontello.com">fontello.com</a>
    </Credits>
    </Layout>
);

export default About;
