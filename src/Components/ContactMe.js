import React from 'react';

class ContactMe extends React.Component {
    state = {
        selectedContact: null
    }

    renderText = () => {
        if (this.state.selectedContact === "email") {
            return <p>Email: costinsf11@gmail.com</p>
        } else if (this.state.selectedContact === "phone") {
            return <p>Phone Number: 1 (415) 713-0407</p>
        }
    }

    navigateTo = (event, url) => {
        this.setState({selectedContact: null})
        if (event.metaKey || event.ctrlKey) {
            window.open(url);
            return;
        }
        window.location = url
    }

    render() {
        return (
            <div className="ui center aligned vertical inverted segment stripe">
                <h2 className="ui center aligned header">Contact Me!</h2>
                <div className="ui three column centered grid">
                    <div className="column">
                        <div className="ui equal width grid"> 
                            <div className="center aligned column">
                                <i className="big github link icon" onClick={(e) => this.navigateTo(e, "https://github.com/LtAstros")}></i>
                            </div>
                            <div className="center aligned column">
                                    <i className="big linkedin link icon" onClick={(e) => this.navigateTo(e, "https://www.linkedin.com/in/costin-smilovici-805699166")}></i>
                            </div>
                            <div className="center aligned column">
                                <i className="big file alternate link icon" onClick={(e) => this.navigateTo(e, "https://docs.google.com/document/d/1_N8TFbsTNVKj1Hq21qBZMT0-wSMs2AvpMxZrO-BRtqU/edit?usp=sharing")}></i>
                            </div>
                            <div className="center aligned column">
                                <i className="big phone link icon" onClick={(e) => {this.setState({selectedContact: "phone"})}}></i>
                            </div>
                            <div className="center aligned column">
                                <i className="big envelope link icon" onClick={(e) => {this.setState({selectedContact: "email"})}}></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center aligned column">
                                {this.renderText()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe;