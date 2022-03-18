/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
export default function IconDarkMode({ className: classes }) {
  return <span className={clsx(styles.ToggleIcon, classes)}>&#127772;</span>;
}
