import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducer";

import { Provider } from "react-redux";

// createStore を使って store を作る
// その際に reducer を紐づける
const store = createStore(reducer);

console.log(store);

// store がうまく機能しているか確認する

// store が変更された際に実行する内容を登録する
store.subscribe(() => {
  // store.getState() で state を取得できる
  console.log(store.getState());
});

store.dispatch({ type: "MINUS", payload: { num: 2 } });
store.dispatch({ type: "PLUS", payload: { num: 1 } });
store.dispatch({ type: "MINUS", payload: { num: 4 } });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
