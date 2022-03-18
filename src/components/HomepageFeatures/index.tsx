import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Front End",
    Svg: require("@site/static/img/res.svg").default,
    description: (
      <>Sharing about Front End in general and ReactJS in particular.</>
    ),
  },
  {
    title: "Blog",
    Svg: require("@site/static/img/blog.svg").default,
    description: <>Not only about technologies.</>,
  },
  {
    title: "Advanced ReactJS",
    Svg: require("@site/static/img/react.svg").default,
    description: <>More advanced ReactJS which I learn from other resources.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
