(function(){
// ProImg
function ProImg(props){
return (
    <img src="./images/blue.jpg" alt="상세이미지" />
)
}
// ProColor
function ProColor(props){
    return (
        <p>
            <label htmlFor="color">color</label>
            <select
                defaultValue="blue"
                id="color"
                >
                 <option value="" key="">blue</option>   
                </select>
        </p>
    )
}
// ProSize
function ProSize(props){
    return (
        <p>
            <label htmlFor="size">size</label>
            <select defaultValue="10">
                <option value="" key="">7</option>
            </select>
        </p>
    )
}
// APP
function App(){
    return (
        <div className="custom">
            <div className="pic">
                <ProImg />
             
            </div>
            <div className="selector">
                <ProColor />
                <ProSize />        
            </div>
        </div>
    )
}
// 
const box = document.querySelector('#room')
ReactDOM.render(
    <App />,box
)

})()