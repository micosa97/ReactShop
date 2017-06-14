import React from 'react';
import ReactDOM from 'react-dom';

import RootView from "./components/RootView.jsx";

ReactDOM.render(
	<RootView />,
	document.getElementById('app')
);


/**
 * +1 za dodanie url-loader i ladowanie nim grafik
 * -1 za nie dodanie url-loader do package.json
 * -1 za same grafiki. One powinny być svg albo icon fontem, bądź w ostateczności podmienione z font-awesome.
 * 		Png na buttony i ich stan hover już dawno nie jest wykorzystywany.
 */