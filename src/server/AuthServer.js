import generateSessionKey from '../utils/generateSessionKey';
import lifeTime from '../utils/lifeTime';
import timeStamp from '../utils/timeStamp';
import Crypt from '../utils/crypt';

const key = "ARASDNJASDBAHSD@23213";
const   ticket = {
    sessionKey: '',
    timeStamp: '',
    lifeTime: '',
    TGS: {}
};

componentWillMount () {
    const newTicket = {};
    newTicket.sessionKey = <generateSessionKey key = {this.props.password} />;
    newTicket.timeStamp = <timeStamp />;
    newTicket.lifeTime = <lifeTime />;
    newTicket.TGS = <TGS 
      sessionKey = {newTicket.sessionKey}
      clientId={this.props.clientId}
      clientIp = {this.props.clientIp}
      TGSId = {this.props.TGSId}
      key={key}
    />;

    this.setState({
        ...ticket,
        ...newTicket
    });
}

const AuthServer = () => (
    <Crypt dataToCrypt={this.ticket}/>
);

export default AuthServer;