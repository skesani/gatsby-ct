import React from 'react';
import Row from "@paljs/ui/Row";
import Col from "@paljs/ui/Col";
import {Card, CardBody, CardFooter, CardHeader} from "@paljs/ui/Card";
import SEO from "../components/SEO";
import {Status} from "@paljs/ui/types";
import {Button} from "@paljs/ui/Button";

const apis = [{
    name: 'Operational Data Gateway Service',
    description: 'These following FDA Center For Tobacco Products APIs cover a range of important data and functionality. Some of the APIs are available to the general public, and others are for Center For Tobacco Products  partners only.',
    link: 'https://www.fda.gov/'
},
    {
        name: 'Enterprise Reporting Service',
        description: 'These following FDA Center For Tobacco Products APIs cover a range of important data and functionality. Some of the APIs are available to the general public, and others are for Center For Tobacco Products  partners only.',
        link: 'https://www.fda.gov/'
    },
    {
        name: 'Operational Document Service',
        description: 'These following FDA Center For Tobacco Products APIs cover a range of important data and functionality. Some of the APIs are available to the general public, and others are for Center For Tobacco Products  partners only.',
        link: 'https://www.fda.gov/'
    },
    {
        name: 'Central Data Repository Service',
        description: 'These following FDA Center For Tobacco Products APIs cover a range of important data and functionality. Some of the APIs are available to the general public, and others are for Center For Tobacco Products  partners only.',
        link: 'https://www.fda.gov/'
    }];

const status: Status[] = ['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Basic', 'Control'];

const style = { margin: '1rem', maxWidth: '25%' };

export default function Index() {
    return (
        <div> { <div style={{textAlign: "center", alignItems: "center"}}>
            <SEO title="Center For Tobacco Products  API Directory" />
            <div style={{textAlign: "left", width: "90%", margin: "1% 12%"}}>
                <h3 style={{color: "#02bfe7"}}>CTP API Directory</h3>
                <p style={{color: "#ffffff", lineHeight: "1.5"}}/>
                <br />
                <br /> {apis.map(api => { return ( <Row>
                <Col breakPoint={{xs: 10, md: 10}}>
                    <Card>
                        <CardHeader style={{background: "#efefef"}}>{api.name}</CardHeader>
                        <CardBody>{api.description}
                            <br/>
                            <Col key={api.name} style={style} breakPoint={{ xs: true }}>
                                <Button fullWidth appearance="hero" status={"Basic"}>
                                    <a style={{'textDecoration': 'none'}} href={api.link} target={"_blank"}>View API Documentation</a>
                                </Button>
                            </Col>
                        </CardBody>
                        <CardFooter style={{background: "#2e8540", padding: "0.5rem 0.5rem"}}/>
                    </Card>
                </Col>
            </Row>) }) }
            </div>
        </div> }
        </div>
    );
}
