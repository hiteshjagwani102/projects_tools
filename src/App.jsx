import { Tilt } from "react-tilt";
import Project from "./components/Project";
import cssButton from './assets/css_button_generator.jpg'
import htmlViewer from './assets/HtmlViewer.jpg'
import drawCircle from './assets/drawCircle.jpg'
import checkboxGame from './assets/checkboxGame.jpg'

function App() {
  return (
    <div>
      <h1 className="text-4xl font-sans font-bold text-gray-200 text-center mt-4 mb-10">My Past Internship Projects</h1>
      <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
      <Project code="https://github.com/hiteshjagwani102/daily_report/tree/main/projects/Css%20Button%20Generator" live="https://hiteshjagwani102.github.io/daily_report/projects/Css%20Button%20Generator/index.html" image={cssButton} title="Css Button Generator" description="A versatile tool that allows users to input various parameters and obtain a customized button with specific styling. By utilizing this tool, users can easily generate buttons tailored to their specific needs. The tool accepts inputs such as button text, color scheme, size, shape, and font, among others. Based on the provided inputs, the StylerButton tool dynamically generates a button with the desired styling attributes."  />
      <Project code="https://github.com/hiteshjagwani102/daily_report/tree/main/projects/HTML%20Viewer" live="https://hiteshjagwani102.github.io/daily_report/projects/HTML%20Viewer/index.html" image={htmlViewer} title="Html Viewer and Formattor" description='HTML Viewer is a web-based tool that allows users to view the content of an HTML code, HTML file, and HTML URL. HTML is used to build websites/pages, and an HTML Viewer allows users to see the content of an HTML file as it would appear on a web page. In addition to viewing the content of an HTML file, this HTML Viewer also provides additional features, such as syntax highlighting, error checking, and debugging tools, which can be useful for web developers and designers.'  />
      <Project code="https://github.com/hiteshjagwani102/daily_report/tree/main/projects/Circle" live="https://hiteshjagwani102.github.io/daily_report/projects/Circle/index.html" image={drawCircle} title="Draw Perfect Circle" description="Using a combination of HTML, CSS, and JavaScript, the Circle Accuracy Game provides an intuitive interface where players can freely draw circles on the screen using their mouse or touch input. As they draw, the game calculates the accuracy of their circles based on how closely they match a predefined target circle. The accuracy is represented by vibrant colors that dynamically change based on the proximity of the player's circle to the target.The game also incorporates local storage functionality to store and display high scores."  />
      <Project code="https://github.com/hiteshjagwani102/daily_report/tree/main/projects/checkbox%20game" live="https://hiteshjagwani102.github.io/daily_report/projects/checkbox%20game/level1/index.html" image={checkboxGame} title="CheckBox Game" description="Welcome to the captivating world of the Checkbox Challenge! This web-based game offers an exciting and brain-teasing experience for players of all ages. With each level presenting unique variations of checkboxes, your task is to strategically select the right combination to achieve a specific target and progress to the next level.Designed with HTML, CSS, and JavaScript, the Checkbox Challenge presents an intuitive interface where players encounter a series of checkboxes with varying difficulty levels." />
      </div>

      <h1 className="text-3xl font-sans font-bold text-gray-200 text-center mt-10 mb-10 flex justify-center items-center">Technologies Used:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
</svg><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
</svg> 
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
</svg>
</h1>
      
    </div>
  );
}

export default App;
