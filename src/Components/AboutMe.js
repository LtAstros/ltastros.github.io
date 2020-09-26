import React from 'react';
import Portrait from '../Images/Portrait.jpeg';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="ui center aligned vertical segment stripe">
                            <h2 className="ui header">Hi, I'm Costin Smilovici! Let me tell you a bit about myself...</h2>
                            <img 
                                className="ui centered small circular image" 
                                style={{marginTop: "2em", marginBottom:"2em"}}
                                alt="Costin Smilovici" 
                                src={Portrait}
                            />
                            <div className="ui text container">
                                <p>
                                    Throughout my life, I have had a profound interest in technology and computers. My introduction to web development started off with the Code Nation program and advanced course which taught me the skills to be proficient in HTML, CSS, and Javascript. The program also gave me exciting opportunities such as participating in hackathons, visiting companies to learn technical and interpersonal skills, and obtaining an internship at Salesforce.org. During the internship, I had to become proficient in React.js, which let me practice fast and efficient on-site learning for the library. Currently, I am continuing my studies through a data science major at UCSD in the hopes of obtaining a career in the tech industry. 
                                </p>
                            </div>
            </div>
        )
    }
}

export default AboutMe;