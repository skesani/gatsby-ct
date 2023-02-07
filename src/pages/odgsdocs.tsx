import React from 'react';
import Row from "@paljs/ui/Row";
import Col from "@paljs/ui/Col";
import {Card, CardBody, CardFooter, CardHeader} from "@paljs/ui/Card";
import {Status} from "@paljs/ui/types";
import {Button, ButtonLink} from "@paljs/ui/Button";
import SEO from "../components/SEO";
import {navigate} from "gatsby";
import styled, {css} from "styled-components";
import {breakpointUp} from "@paljs/ui/breakpoints";
import {InputGroup} from "@paljs/ui/Input";


const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;

interface BoxProps {
    nested?: boolean;
    container?: boolean;
    row?: boolean;
    large?: boolean;
}

const Box = styled.div<BoxProps>`
  ${({ theme, nested, container, row, large }) => css`
    position: relative;
    box-sizing: border-box;
    min-height: 1rem;
    overflow: hidden;
    text-align: center;
    background: ${theme.colorBasic600};
    padding: 0.75rem 0.25rem;
    border-radius: 0.25rem;
    ${large && 'height: 8rem;'};
    ${row && 'margin-bottom: 1rem  !important;'};
    ${container && 'padding: .5em;'};
    ${nested && `background-color: ${theme.colorBasic200};`};
    ${breakpointUp('md')`
      padding: 1rem;
    `}
  `}
`;

const apis = [{
    name: 'Operational Data Gateway Service API',
    overview: 'Overview',
    gettingstarted: 'Getting Started',
    specificationfile: 'OpenAPI Specification File' ,
    pmsdescription: 'A request is a message from a user’s browser or application sent to the web server for requesting or sending data or performing an action. Request may have input parameters/fields or not, based on the API/URL requirement.\n' +
        '\n' +
        'A GraphQL API provides a single endpoint per environment to give user/application access to all the data sources they would need for a particular application. GraphQL provides users the flexibility to define which fields, from which data sources, they would like to request in a query.\n' +
        '\n' +
        'GraphQL requests can be sent via HTTP POST or HTTP GET requests. POST requests sent with the Content-Type header application/GraphQL must have a POST body content as a GraphQL query string. For example, the following is a valid POST body for a query:\n',
    link: 'https://dmpbc.dev.fda.gov/odgs/playground',
    goback: '/',
    pmsrequest: 'query {\n' +
        '    getPMSProductList(stn: "PM0001127") {\n' +
        '        prdList {\n' +
        '        predicateStn\n' +
        '        stn\n' +
        '        staticId\n' +
        '        }\n' +
        '    links {\n' +
        '        rel\n' +
        '        href\n' +
        '        }\n' +
        '    }\n' +
        '}',
    rapshodyrequest: 'query {\n' +
        '    getRhapsodySubmissionDataByStn(stn: "EX0000613") {\n' +
        '        submissionType\n' +
        '        dateReceived\n' +
        '        dateSubmitted\n' +
        '        organization\n' +
        '        rhpm\n' +
        '        dateCreated\n' +
        '    }\n' +
        '    links {\n' +
        '        rel\n' +
        '        href\n' +
        '    }\n' +
        '}\n',
    pmsresponse: '{\n' +
        '    "data": {\n' +
        '        "getPMSProductList": {\n' +
        '            "prdList": [\n' +
        '                {\n' +
        '                    "predicateStn": null,\n' +
        '                    "stn": "PM0001127",\n' +
        '                    "staticId": "PM0001127-PD1"\n' +
        '                },\n' +
        '                {\n' +
        '                    "predicateStn": null,\n' +
        '                    "stn": "PM0001127",\n' +
        '                    "staticId": "PM0001127-PD2"\n' +
        '                },\n' +
        '                {\n' +
        '                    "predicateStn": null,\n' +
        '                    "stn": "PM0001127",\n' +
        '                    "staticId": "PM0001127-PD3"\n' +
        '                },\n' +
        '                {\n' +
        '                    "predicateStn": null,\n' +
        '                    "stn": "PM0001127",\n' +
        '                    "staticId": "PM0001127-PD4"\n' +
        '                },\n' +
        '            ],\n' +
        '    }\n' +
        '}\n',
    rapshodyresponse: '{\n' +
        '    "data": {\n' +
        '        "getRhapsodySubmissionDataByStn": [\n' +
        '           {\n' +
        '                "submissionType": "EX",\n' +
        '                "dateReceived": "2019-07-29",\n' +
        '                "dateSubmitted": null,\n' +
        '                "organization": "Swisher International Inc.",\n' +
        '                "rhpm": "laura.imes@fda.gov",\n' +
        '                "dateCreated": null\n' +
        '            }\n' +
        '        ]\n' +
        '    }\n' +
        '}\n',
    responseDescription: 'Response is a reply from the web server or web service for the user’s request with the required information. GraphQL responses are in JSON.',
    filteringdocument:'Filtering By Parameters'    ,
    responsecodes:'HTTP Response Codes',
    contactus:'Contact Us'
}];

const status: Status[] = ['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Basic', 'Control'];

const style = { margin: '1rem', maxWidth: '100%' };

export default function odgsdocs() {
    return (
        <div>
            {
                <Card>
                    <CardBody>
                        <Row>
                            <Col breakPoint={{ xs: 2, sm: 4, md: 4, lg: 2 }}>
                                    <div style={{fontSize: "1.3rem", lineHeight: "1.5"}} id="top-div" className="split left">
                                        <div className="centered" >
                                            <a href="#overview">Overview</a>
                                        </div>
                                        <div>
                                            <a href="#gettingstarted">Getting Started</a>
                                        </div>
                                        <div>
                                            <a href="#request">The Request</a>
                                        </div>
                                        <div>
                                            <a href="#response">The Response</a>
                                        </div>
                                        <div>
                                            <a href="#documentsbyparameters">Filtering</a>
                                        </div>
                                        <div>
                                            <a href="#responsecodes">HTTP Response Codes</a>
                                        </div>
                                        <div>
                                            <a href="#contactus">Contact Us</a>
                                        </div>
                                    </div>
                            </Col>
                            <Col breakPoint={{ xs: 9, sm: 8, md: 8, lg: 10 }}>
                                <div style={{textAlign: "center", alignItems: "center"}}>
                                    <SEO title="Operational Data Gateway Service" />
                                    <div style={{textAlign: "left", width: "90%", margin: "1% 12%"}}>
                                        <br /> {apis.map((api, index) => { return ( <Row>
                                        <Col breakPoint={{xs: 10, md: 10}} key={index}>
                                            <Card>
                                                <CardHeader style={{background: "#efefef", fontSize: "30px", color:"#205493"}}>{api.name}
                                                </CardHeader>
                                                <CardBody id="overview">
                                                    <h5 style={{color:"#205493"}}>{api.overview}</h5>
                                                    <p>Operational Data Gateway Service (ODGS) is implemented to serve the data related requests of the various CTP OS internal consumer applications. Operational Data Gateway Service might combine data from multiple locations and multiple sources into a unified view. Consumer application will receive accurate, latest, unified, and just required data.
                                                        Operational Data Gateway Service (ODGS) works as a data gateway for multiple data sources across CTP-OS applications like PMS, Rhapsody etc. ODGS is to access PMS and/or Rhapsody PostgreSQL database residing in different AWS VPC, read the data, process as per the client request, and return the response in JSON format.</p>
                                                </CardBody>
                                                <CardBody id="gettingstarted">
                                                    <h5 style={{color:"#205493"}}>{api.gettingstarted}</h5>
                                                    <p>To begin using this API, you will need to register for an API
                                                        Key. You can sign up for an API key below. After registration,
                                                        you will need to provide this API key in the <code
                                                            className="language-plaintext highlighter-rouge">api-key</code> HTTP
                                                        header with every API request.</p>
                                                    
                                                    <table style={{borderCollapse: "collapse",width: "100%"}}>
                                                        <thead>
                                                        <tr style={{backgroundColor:"#f1f1f1"}}>
                                                            <th style={{border: "1px solid #ddd", padding: "8px"}}>HTTP Header Name</th>
                                                            <th style={{border: "1px solid #ddd", padding: "8px"}}>Description</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody style={{display: "table-header-group", verticalAlign: "middle", borderColor: "inherit"}}>
                                                        <tr>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>api-key</td>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>API key from api.data.gov. For sample purposes, you can
                                                                use <code
                                                                    className="language-plaintext highlighter-rouge">DEMO_KEY</code> as
                                                                an API key.
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <CardBody>
                                                        <p className="required-fields" style={{marginBottom:"calc(1 * var(--api-umbrella-rem-relative-base))"}}>Required fields are marked with
                                                            an asterisk (<abbr title="required" style={{ fontFamily:"Verdana",color:"c45500",fontWeight:"1000"}}
                                                                               className="required">*</abbr>).</p>
                                                        <form>
                                                            <div className="form-group first-name-form-group">
                                                                <label className="form-label" htmlFor="user_first_name">First
                                                                    Name <abbr title="required"
                                                                               className="required">*</abbr></label>
                                                                <Input fullWidth size="Small">
                                                                    <input type="text" placeholder="enter first name" className="form-control" id="user_first_name"
                                                                           aria-describedby="user_first_name_feedback"
                                                                           name="user[first_name]"
                                                                           required={true}/>
                                                                </Input>
                                                            
                                                            </div>
                                                            
                                                            <div className="form-group last-name-form-group">
                                                                <label className="form-label" htmlFor="user_last_name">Last
                                                                    Name <abbr title="required"
                                                                               className="required">*</abbr></label>
                                                                <Input fullWidth size="Small">
                                                                    <input type="text" placeholder="enter last name" className="form-control" id="user_last_name"
                                                                           aria-describedby="user_last_name_feedback"
                                                                           name="user[last_name]"
                                                                           required={true}/>
                                                                </Input>
                                                            </div>
                                                            
                                                            <div className="form-group email-form-group">
                                                                <label className="form-label"
                                                                       htmlFor="user_email">Email <abbr title="required"
                                                                                                        className="required">*</abbr></label>
                                                                <Input fullWidth size="Small">
                                                                    <input type="email" placeholder="enter email address" className="form-control" id="user_email"
                                                                           aria-describedby="user_email_feedback"
                                                                           name="user[last_name]"
                                                                           required={true}/>
                                                                </Input>
                                                            </div>
                                                            <div className="submit">
                                                                <ButtonLink appearance="hero" onClick={() => navigate('/')} shape="Rectangle">
                                                                    Signup
                                                                </ButtonLink>
                                                            </div>
                                                        </form>
                                                    
                                                    </CardBody>
                                                    <p><small><a href="#top-div">Back to top</a></small></p>
                                                </CardBody>
                                                <CardBody id="request">
                                                    <h5 style={{color:"#205493"}}>The Request</h5>
                                                    <p>{api.pmsdescription}</p>
                                                    <br/>
                                                    <p>To get product data from PMS PostgreSQL database:</p>
                                                    <br/>
                                                    <pre style={{background: '#FCFCFC', color: "#205493"}}>{api.pmsrequest}</pre>
                                                    <br/>
                                                    <p>To get bundle data from Rhapsody PostgreSQL database:</p>
                                                    <br/>
                                                    <pre style={{background: '#FCFCFC', color: "#205493"}}>{api.rapshodyrequest}</pre>
                                                    <br/>
                                                    <p><small><a href="#top-div">Back to top</a></small></p>
                                                </CardBody>
                                                <CardBody id="response">
                                                    <h5 style={{color:"#205493"}}>The Response</h5>
                                                    <p>{api.responseDescription}</p>
                                                    <br/>
                                                    <p>Response for the above product request from PMS:</p>
                                                    <br/>
                                                    <pre style={{background: '#FCFCFC', color: "#205493"}}>{api.pmsresponse}</pre>
                                                    <br/>
                                                    <p>Response for the above bundle request from Rhapsody:</p>
                                                    <br/>
                                                    <pre style={{background: '#FCFCFC', color: "#205493"}}>{api.rapshodyresponse}</pre>
                                                    <br/>
                                                    <Col key={api.name} style={style} breakPoint={{ md: true }}>
                                                        <Row>
                                                            <Col breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                                                <Button  appearance="hero" status={"Basic"}>
                                                                    <a style={{'textDecoration': 'none'}} href={api.link} target={"_blank"}>View API Documentation</a>
                                                                </Button>
                                                            </Col>
                                                            <Col breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                                                <Button style={{ marginLeft: "50%", color: "#3366ff"}} appearance="hero" status={"Basic"} onClick={() => navigate('/')} shape="Rectangle">
                                                                    view dashboard
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <p><small><a href="#top-div">Back to top</a></small></p>
                                                </CardBody>
                                                <CardBody id="documentsbyparameters">
                                                    <h5 style={{color:"#205493"}}>{api.filteringdocument}</h5>
                                                    <p>getRhapsodySubmissionDataByStn(stn:"EX0000613") </p>
                                                    
                                                    <p>Ex. stn:"EX0000613"</p>
                                                    
                                                    <p>It will return the results with stn:"EX0000613"</p>
                                                </CardBody>
                                                <CardBody id="responsecodes">
                                                    <h5 style={{color:"#205493"}}>{api.responsecodes}</h5>
                                                    <p>The API will return one of the following responses:</p>
                                                    
                                                    <table style={{borderCollapse: "collapse",width: "100%"}}>
                                                        <thead>
                                                        <tr style={{backgroundColor:"#f1f1f1"}}>
                                                            <th style={{border: "1px solid #ddd", padding: "8px"}}>HTTP Response Code</th>
                                                            <th style={{border: "1px solid #ddd", padding: "8px"}}>Description</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody style={{display: "table-header-group", verticalAlign: "middle", borderColor: "inherit"}}>
                                                        <tr>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>200</td>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>Successful. Data will be returned in JSON format.</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>400</td>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>Bad request. Verify the query string parameters that were provided.</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>403</td>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>API key is not correct or was not provided.</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>4XX</td>
                                                            <td style={{border: "1px solid #ddd", padding: "8px"}}>Additional 400-level are caused by some type of error in the information submitted.</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    
                                                    <p><small><a href="#top-div">Back to top</a></small></p>
                                                </CardBody>
                                                <CardBody id="contactus">
                                                    <h5 style={{color:"#205493"}}>{api.contactus}</h5>
                                                    <p>To suggest a feature or ask for help, please <a href="https://www.fda.gov/about-fda/fda-organization/center-tobacco-products" target={"_blank"}>file an issue in our project repository</a>.</p>
                                                    
                                                    <p><small><a href="#top-div">Back to top</a></small></p>
                                                </CardBody>
                                                <CardFooter style={{background: "#2e8540", padding: "0.5rem 0.5rem"}}/>
                                            </Card>
                                        </Col>
                                    </Row>) }) }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            }
        </div>
    );
}
