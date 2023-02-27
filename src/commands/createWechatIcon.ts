#!/usr/bin/env node

import colors from "colors";
import { getConfig } from "../libs/getConfig";
import { fetchXml } from "../libs/fetchXml";
import { generateWechatComponent } from "../libs/generateWechatComponent";
import axios from "axios";

const config = getConfig();

if (config.font_url) {
  axios
    .get<string>(config.font_url)
    .then(({ data }) => {
      generateWechatComponent(data, config, "icon");

      return;
    })
    .catch((e) => {
      console.error(colors.red(e.message || "Unknown Error"));
      process.exit(1);
    });
} else {
  fetchXml(config.symbol_url)
    .then((result) => {
      generateWechatComponent(result, config, "symbol");
    })
    .catch((e) => {
      console.error(colors.red(e.message || "Unknown Error"));
      process.exit(1);
    });
}
