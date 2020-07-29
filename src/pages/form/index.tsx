import React, { useState, useEffect } from "react";
import { EggForm, EggInput } from "@redchili/egg-ui";
import { EggFieldItem, EggSubmit } from "@redchili/egg-ui/dist/components/form";

import { Label } from "remax/one";
import { css } from "linaria";

export default function FormDemo() {
  const [errors, registerError] = useState({});

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <EggForm
      registerError={registerError}
      onSubmit={(data) => {
        console.log("这里执行了", data);
      }}
    >
      <EggFieldItem
        className={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
        `}
        name="nickname"
        rule={[{ required: true, message: "请输入昵称" }]}
      >
        <Label
          htmlFor="nickname"
          className={css`
            font-size: 32px;
            margin-right: 10px;
          `}
        >
          测试:
        </Label>
        <EggInput name="nickname" />
      </EggFieldItem>
      <EggFieldItem
        className={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
        `}
        name="phone"
        rule={[{ required: true, message: "请输入手机号" }]}
      >
        <Label
          htmlFor="phone"
          className={css`
            font-size: 32px;
            margin-right: 10px;
          `}
        >
          测试:
        </Label>
        <EggInput name="phone" />
      </EggFieldItem>
      <EggSubmit
        className={css`
          margin-top: 20px;
        `}
      >
        提交
      </EggSubmit>
    </EggForm>
  );
}
