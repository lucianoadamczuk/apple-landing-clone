import { v4 as uuidv4 } from "uuid";
import { Dropdown } from "../components";
export default function Footer() {
  const array = {
    shops: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],

    services: [
      "Apple Music",
      "Apple TV+",
      "Apple Fitness+",
      "Apple News+",
      "Apple Arcade",
      "iCloud",
      "Apple One",
      "Apple Card",
      "Apple Books",
      "Apple Podcasts",
      "Apple Store",
    ],

    account: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    store: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Refurbished and Clearance",
      "Financing",
      "Apple Trade In",
      "Order Status",
      "Shopping Help",
    ],
    business: ["Apple and Business", "Shop for Business"],
    education: ["Apple and Education", "Shop for K-12", "Shop for College"],
    healthcare: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
    government: ["Shop for Government", "Shop for Veterans and Military"],
    values: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supplier Responsability",
    ],
    about: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  };

  const Container = ({
    title,
    display,
  }: {
    title: string;
    display: string[];
  }) => {
    return (
      <article className=" mb-8  ">
        <p className=" capitalize"> {title} </p>
        <div className="  gap-1">
          {display?.map((item) => (
            <p key={uuidv4()} className=" text-sm">
              {item}
            </p>
          ))}
        </div>
      </article>
    );
  };

  return (
    <footer>
      <div className="container divide-y-2 divide-gray">
        <section className=" mb-5 space-y-5 text-xs text-gray">
          <p>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings /
            General / Software Update. Tap Download and Install.
          </p>

          <p>Available for qualifying applicants in the United States.</p>

          <p>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
          </p>

          <p>
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218.
          </p>
        </section>

        <section className=" lg:hidden">
          {Object.keys(array).map((item, index) => (
            <Dropdown title={item}>
              {Object.values(array)[index].map((item) => (
                <p key={uuidv4()}> {item} </p>
              ))}
            </Dropdown>
          ))}
        </section>

        {/* desktop */}
        <section className=" hidden lg:block py-5 columns-5 gap-5">
          {Object.keys(array).map((key, index) => (
            <Container
              key={uuidv4()}
              title={key}
              display={Object.values(array)[index]}
            />
          ))}
        </section>

        <section className=" pb-5 ">
          <p>
            More ways to Shop{" "}
            <span className=" text-link">Find an Apple Store</span> or{" "}
            <span className=" text-link">other retailer</span> near you. Or call
            1-800-MY-APPLE
          </p>

          <div className=" text-xs flex flex-col gap-x-10 gap-y-2">
            <p className=" text-gray">
              Copyright © 2022 Apple Inc. All rights reserved. United States
            </p>

            <div className=" flex gap-x-5 flex-wrap">
              <p>Privacy Policy</p>
              <p>Terms of Use </p>
              <p>Sales and Refunds </p>
              <p>Legal</p>
              <p> Site Map</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
