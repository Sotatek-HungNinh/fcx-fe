import TradingViewWidget, {Themes} from 'react-tradingview-widget';


const Home = () => {
    return (
        <div>
            <TradingViewWidget
            symbol="BTCEUR"
            theme={Themes.LIGHT}
            locale="vi"
            height="500"
            />
        </div>    
    )
}
export default Home;