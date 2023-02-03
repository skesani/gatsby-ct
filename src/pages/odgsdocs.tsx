import React from 'react';
import Row from "@paljs/ui/Row";
import Col from "@paljs/ui/Col";
import {Card, CardBody, CardFooter, CardHeader} from "@paljs/ui/Card";
import {Status} from "@paljs/ui/types";
import {Button, ButtonLink} from "@paljs/ui/Button";
import SEO from "../components/SEO";
import {navigate} from "gatsby";

const apis = [{
    name: 'ODGS PMS API',
    description: 'These following FDA CTP APIs cover a range of important data and functionality. Some of the APIs are available to the general public, and others are for CTP partners only.',
    link: 'https://www.fda.gov/',
    goback: '/',
    request: 'query {\n' +
        '    getRdsProductList(stn: "EX0000611"){\n' +
        '        prdList{\n' +
        '                stn\n' +
        '                type\n' +
        '                commonName\n' +
        '                comments\n' +
        '                submsnProduct{\n' +
        '                    manufacturer\n' +
        '            }\n' +
        '                uniqueProduct{\n' +
        '                    orgName\n' +
        '            }\n' +
        '                predicateList{\n' +
        '                    commonName\n' +
        '                    comments\n' +
        '                    submsnProduct{\n' +
        '                        manufacturer\n' +
        '                }\n' +
        '                uniqueProduct{\n' +
        '                    orgName\n' +
        '                }\n' +
        '            }\n' +
        '                createdDateTime\n' +
        '                createdByUser\n' +
        '                updatedDateTime\n' +
        '                updatedByUser\n' +
        '        }\n' +
        '    }\n' +
        '}',
    response: ''
}, {
    name: 'ODGS Rapshody API',
    description: 'These following FDA CTP APIs cover a range of important data and functionality. Some of the APIs are available to the general public, and others are for CTP partners only.',
    link: 'https://www.fda.gov/',
    goback: '/',
    request: 'query {\n' +
        '    getRdsProductList(stn: "EX0000611"){\n' +
        '        prdList{\n' +
        '                stn\n' +
        '                type\n' +
        '                commonName\n' +
        '                comments\n' +
        '                submsnProduct{\n' +
        '                    manufacturer\n' +
        '            }\n' +
        '                uniqueProduct{\n' +
        '                    orgName\n' +
        '            }\n' +
        '                predicateList{\n' +
        '                    commonName\n' +
        '                    comments\n' +
        '                    submsnProduct{\n' +
        '                        manufacturer\n' +
        '                }\n' +
        '                uniqueProduct{\n' +
        '                    orgName\n' +
        '                }\n' +
        '            }\n' +
        '                createdDateTime\n' +
        '                createdByUser\n' +
        '                updatedDateTime\n' +
        '                updatedByUser\n' +
        '        }\n' +
        '    }\n' +
        '}',
    response: ''
}, {
    name: 'ODGS Federated API',
    description: 'These following FDA CTP APIs cover a range of important data and functionality. Some of the APIs are available to the general public, and others are for CTP partners only.',
    link: 'https://www.fda.gov/',
    goback: '/',
    request: 'query {\n' +
        '    getRdsProductList(stn: "EX0000611"){\n' +
        '        prdList{\n' +
        '                stn\n' +
        '                type\n' +
        '                commonName\n' +
        '                comments\n' +
        '                submsnProduct{\n' +
        '                    manufacturer\n' +
        '            }\n' +
        '                uniqueProduct{\n' +
        '                    orgName\n' +
        '            }\n' +
        '                predicateList{\n' +
        '                    commonName\n' +
        '                    comments\n' +
        '                    submsnProduct{\n' +
        '                        manufacturer\n' +
        '                }\n' +
        '                uniqueProduct{\n' +
        '                    orgName\n' +
        '                }\n' +
        '            }\n' +
        '                createdDateTime\n' +
        '                createdByUser\n' +
        '                updatedDateTime\n' +
        '                updatedByUser\n' +
        '        }\n' +
        '    }\n' +
        '}',
    response: ''
}];

const status: Status[] = ['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Basic', 'Control'];

const style = { margin: '1rem', maxWidth: '100%' };

export default function odgsdocs() {
    return (
        <div> { <div style={{textAlign: "center", alignItems: "center"}}>
            <SEO title="Operational Data Gateway Service" />
            <div style={{textAlign: "left", width: "90%", margin: "1% 12%"}}>
                <br /> {apis.map((api, index) => { return ( <Row>
                <Col breakPoint={{xs: 10, md: 10}} key={index}>
                    <Card>
                        <CardHeader style={{background: "#efefef"}}>{api.name}</CardHeader>
                        <CardBody>{api.description}
                            <br/>
                            <p><strong><u>Request</u></strong></p>
                            <pre style={{background: 'black', color: "white"}}>{api.request}</pre>
                            <br/>
                            <p><strong><u>Response</u></strong></p>
                            <pre style={{background: 'black', color: "white"}}>{api.request}</pre>
                            <br/>
                            <Col key={api.name} style={style} breakPoint={{ md: true }}>
                                <Row>
                                    <Col breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                        <Button  appearance="hero" status={"Basic"}>
                                            <a style={{'textDecoration': 'none'}} href={api.link} target={"_blank"}>View API Documentation</a>
                                        </Button>
                                    </Col>
                                    <Col breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                        <ButtonLink style={{ marginRight: "10%"}} appearance="hero" onClick={() => navigate('/')} shape="Rectangle">
                                           view dashboard
                                        </ButtonLink>
                                    </Col>
                                </Row>
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
