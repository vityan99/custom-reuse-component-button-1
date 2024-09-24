import React from "react";
import style from "./app.module.css";
import cn from "classnames";

import Button from "../button/Button";

function App() {
  return (
    <div className={cn(style.content)}>
      <div className={cn(style.content__line)}>
        <Button use="primary" title="Button" theme="light" size="m" />
        <Button use="primary" title="Button" theme="light" size="m" icon />
        <Button use="primary" theme="light" size="m" icon />
        <Button use="primary" title="Button" theme="light" size="l" />
        <Button use="primary" title="Button" theme="light" size="l" icon />
        <Button use="primary" theme="light" size="l" icon />
        <Button use="primary" title="Button" theme="light" size="xl" />
        <Button use="primary" title="Button" theme="light" size="xl" icon />
        <Button use="primary" theme="light" size="xl" icon />
        <Button use="primary" title="Button" theme="light" size="xl" disabled={true} />
        <Button use="primary" title="Button" theme="light" size="xl" disabled={true} icon />
        <Button use="primary" theme="light" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="secondary" title="Button" theme="light" size="m" />
        <Button use="secondary" title="Button" theme="light" size="m" icon />
        <Button use="secondary" theme="light" size="m" icon />
        <Button use="secondary" title="Button" theme="light" size="l" />
        <Button use="secondary" title="Button" theme="light" size="l" icon />
        <Button use="secondary" theme="light" size="l" icon />
        <Button use="secondary" title="Button" theme="light" size="xl" />
        <Button use="secondary" title="Button" theme="light" size="xl" icon />
        <Button use="secondary" theme="light" size="xl" icon />
        <Button use="secondary" title="Button" theme="light" size="xl" disabled={true} />
        <Button use="secondary" title="Button" theme="light" size="xl" disabled={true} icon />
        <Button use="secondary" theme="light" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="outline" title="Button" theme="light" size="m" />
        <Button use="outline" title="Button" theme="light" size="m" icon />
        <Button use="outline" theme="light" size="m" icon />
        <Button use="outline" title="Button" theme="light" size="l" />
        <Button use="outline" title="Button" theme="light" size="l" icon />
        <Button use="outline" theme="light" size="l" icon />
        <Button use="outline" title="Button" theme="light" size="xl" />
        <Button use="outline" title="Button" theme="light" size="xl" icon />
        <Button use="outline" theme="light" size="xl" icon />
        <Button use="outline" title="Button" theme="light" size="xl" disabled={true} />
        <Button use="outline" title="Button" theme="light" size="xl" disabled={true} icon />
        <Button use="outline" theme="light" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="text" title="Button" theme="light" size="m" />
        <Button use="text" title="Button" theme="light" size="m" icon />
        <Button use="text" theme="light" size="m" icon />
        <Button use="text" title="Button" theme="light" size="l" />
        <Button use="text" title="Button" theme="light" size="l" icon />
        <Button use="text" theme="light" size="l" icon />
        <Button use="text" title="Button" theme="light" size="xl" />
        <Button use="text" title="Button" theme="light" size="xl" icon />
        <Button use="text" theme="light" size="xl" icon />
        <Button use="text" title="Button" theme="light" size="xl" disabled={true} />
        <Button use="text" title="Button" theme="light" size="xl" disabled={true} icon />
        <Button use="text" theme="light" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="rounded" title="Button" theme="light" size="m" />
        <Button use="rounded" title="Button" theme="light" size="m" icon />
        <Button use="rounded" theme="light" size="m" icon />
        <Button use="rounded" title="Button" theme="light" size="l" />
        <Button use="rounded" title="Button" theme="light" size="l" icon />
        <Button use="rounded" theme="light" size="l" icon />
        <Button use="rounded" title="Button" theme="light" size="xl" />
        <Button use="rounded" title="Button" theme="light" size="xl" icon />
        <Button use="rounded" theme="light" size="xl" icon />
        <Button use="rounded" title="Button" theme="light" size="xl" disabled={true} />
        <Button use="rounded" title="Button" theme="light" size="xl" disabled={true} icon />
        <Button use="rounded" theme="light" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="square" title="Button" theme="light" size="m" />
        <Button use="square" title="Button" theme="light" size="m" icon />
        <Button use="square" theme="light" size="m" icon />
        <Button use="square" title="Button" theme="light" size="l" />
        <Button use="square" title="Button" theme="light" size="l" icon />
        <Button use="square" theme="light" size="l" icon />
        <Button use="square" title="Button" theme="light" size="xl" />
        <Button use="square" title="Button" theme="light" size="xl" icon />
        <Button use="square" theme="light" size="xl" icon />
        <Button use="square" title="Button" theme="light" size="xl" disabled={true} />
        <Button use="square" title="Button" theme="light" size="xl" disabled={true} icon />
        <Button use="square" theme="light" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="negative" title="Button" theme="light" size="m" />
        <Button use="negative" title="Button" theme="light" size="m" icon />
        <Button use="negative" theme="light" size="m" icon />
        <Button use="negative" title="Button" theme="light" size="l" />
        <Button use="negative" title="Button" theme="light" size="l" icon />
        <Button use="negative" theme="light" size="l" icon />
        <Button use="negative" title="Button" theme="light" size="xl" />
        <Button use="negative" title="Button" theme="light" size="xl" icon />
        <Button use="negative" theme="light" size="xl" icon />
        <Button use="negative" title="Button" theme="light" size="xl" disabled={true} />
        <Button use="negative" title="Button" theme="light" size="xl" disabled={true} icon />
        <Button use="negative" theme="light" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="primary" title="Button" theme="dark" size="m" />
        <Button use="primary" title="Button" theme="dark" size="m" icon />
        <Button use="primary" theme="dark" size="m" icon />
        <Button use="primary" title="Button" theme="dark" size="l" />
        <Button use="primary" title="Button" theme="dark" size="l" icon />
        <Button use="primary" theme="dark" size="l" icon />
        <Button use="primary" title="Button" theme="dark" size="xl" />
        <Button use="primary" title="Button" theme="dark" size="xl" icon />
        <Button use="primary" theme="dark" size="xl" icon />
        <Button use="primary" title="Button" theme="dark" size="xl" disabled={true} />
        <Button use="primary" title="Button" theme="dark" size="xl" disabled={true} icon />
        <Button use="primary" theme="dark" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="secondary" title="Button" theme="dark" size="m" />
        <Button use="secondary" title="Button" theme="dark" size="m" icon />
        <Button use="secondary" theme="dark" size="m" icon />
        <Button use="secondary" title="Button" theme="dark" size="l" />
        <Button use="secondary" title="Button" theme="dark" size="l" icon />
        <Button use="secondary" theme="dark" size="l" icon />
        <Button use="secondary" title="Button" theme="dark" size="xl" />
        <Button use="secondary" title="Button" theme="dark" size="xl" icon />
        <Button use="secondary" theme="dark" size="xl" icon />
        <Button use="secondary" title="Button" theme="dark" size="xl" disabled={true} />
        <Button use="secondary" title="Button" theme="dark" size="xl" disabled={true} icon />
        <Button use="secondary" theme="dark" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="outline" title="Button" theme="dark" size="m" />
        <Button use="outline" title="Button" theme="dark" size="m" icon />
        <Button use="outline" theme="dark" size="m" icon />
        <Button use="outline" title="Button" theme="dark" size="l" />
        <Button use="outline" title="Button" theme="dark" size="l" icon />
        <Button use="outline" theme="dark" size="l" icon />
        <Button use="outline" title="Button" theme="dark" size="xl" />
        <Button use="outline" title="Button" theme="dark" size="xl" icon />
        <Button use="outline" theme="dark" size="xl" icon />
        <Button use="outline" title="Button" theme="dark" size="xl" disabled={true} />
        <Button use="outline" title="Button" theme="dark" size="xl" disabled={true} icon />
        <Button use="outline" theme="dark" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="text" title="Button" theme="dark" size="m" />
        <Button use="text" title="Button" theme="dark" size="m" icon />
        <Button use="text" theme="dark" size="m" icon />
        <Button use="text" title="Button" theme="dark" size="l" />
        <Button use="text" title="Button" theme="dark" size="l" icon />
        <Button use="text" theme="dark" size="l" icon />
        <Button use="text" title="Button" theme="dark" size="xl" />
        <Button use="text" title="Button" theme="dark" size="xl" icon />
        <Button use="text" theme="dark" size="xl" icon />
        <Button use="text" title="Button" theme="dark" size="xl" disabled={true} />
        <Button use="text" title="Button" theme="dark" size="xl" disabled={true} icon />
        <Button use="text" theme="dark" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="rounded" title="Button" theme="dark" size="m" />
        <Button use="rounded" title="Button" theme="dark" size="m" icon />
        <Button use="rounded" theme="dark" size="m" icon />
        <Button use="rounded" title="Button" theme="dark" size="l" />
        <Button use="rounded" title="Button" theme="dark" size="l" icon />
        <Button use="rounded" theme="dark" size="l" icon />
        <Button use="rounded" title="Button" theme="dark" size="xl" />
        <Button use="rounded" title="Button" theme="dark" size="xl" icon />
        <Button use="rounded" theme="dark" size="xl" icon />
        <Button use="rounded" title="Button" theme="dark" size="xl" disabled={true} />
        <Button use="rounded" title="Button" theme="dark" size="xl" disabled={true} icon />
        <Button use="rounded" theme="dark" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="square" title="Button" theme="dark" size="m" />
        <Button use="square" title="Button" theme="dark" size="m" icon />
        <Button use="square" theme="dark" size="m" icon />
        <Button use="square" title="Button" theme="dark" size="l" />
        <Button use="square" title="Button" theme="dark" size="l" icon />
        <Button use="square" theme="dark" size="l" icon />
        <Button use="square" title="Button" theme="dark" size="xl" />
        <Button use="square" title="Button" theme="dark" size="xl" icon />
        <Button use="square" theme="dark" size="xl" icon />
        <Button use="square" title="Button" theme="dark" size="xl" disabled={true} />
        <Button use="square" title="Button" theme="dark" size="xl" disabled={true} icon />
        <Button use="square" theme="dark" size="xl" disabled={true} icon />
      </div>
      <div className={cn(style.content__line)}>
        <Button use="negative" title="Button" theme="dark" size="m" />
        <Button use="negative" title="Button" theme="dark" size="m" icon />
        <Button use="negative" theme="dark" size="m" icon />
        <Button use="negative" title="Button" theme="dark" size="l" />
        <Button use="negative" title="Button" theme="dark" size="l" icon />
        <Button use="negative" theme="dark" size="l" icon />
        <Button use="negative" title="Button" theme="dark" size="xl" />
        <Button use="negative" title="Button" theme="dark" size="xl" icon />
        <Button use="negative" theme="dark" size="xl" icon />
        <Button use="negative" title="Button" theme="dark" size="xl" disabled={true} />
        <Button use="negative" title="Button" theme="dark" size="xl" disabled={true} icon />
        <Button use="negative" theme="dark" size="xl" disabled={true} icon />
      </div>
    </div>
  );
}

export default App;