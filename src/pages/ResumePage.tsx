import GA from "../utils/google-analytics";
import { useEffect } from "react";
import getTitle from "../utils/get-title";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router";

export default function ResumePage() {
  const pageTitle = getTitle("Resume");
  const a = {
    hitType: "pageview",
    page: window.location.pathname,
    title: pageTitle,
  };

  useEffect(() => {
    document.title = pageTitle;

    GA.send(a);
  }, []);

  const wawaExperience = [
    "Developed and maintained front-end features using Vue3 (Nuxt), NuxtUI, and TailwindCSS",
    "Developed and maintained features for E-commerce and CRM web application APIs using Laravel",
    "Integrated Shippop API via webhooks to automate parcel bookings",
    "Accelerated mock data seeding by running static SQL queries instead of Laravel seeder files",
    "Built a custom field form storage system using the Entity-Attribute-Value (EA V) model",
    "Wrote shell scripts for initializing template web projects",
    "Developed and deployed websites using AWS Amplify, Laravel Forge, and Azure services",
    "Wrote REST API documents using Stoplight.",
  ];

  const enresExperience = [
    "Developed Kafka consumers in Python to process IoT data pipeline from Kafka topics.",
    "Developed and maintained REST APIs for web applications using the PHP Lumen framework.",
    "Optimized REST API performance by caching results in Redis.",
    "Optimized SQL slow queries by adding B-tree indexes and partitions in PostgreSQL.",
    "Developed unit tests and integration tests using PHPUnit and Pytest.",
    "Wrote REST API documents using Swagger.",
    "Developed and maintained new features of web applications APIs in 1-week sprints.",
    "Developed and integrated AWS IoT APIs to auto-generate policies and certificates for IoT things.",
    "Created a webhook integrated with Twilio to make a voice call operation.",
    "Created a webhook integrated with Freshdesk, Helpdesk ticketing system, to open, update, and close customer tickets via Line chats.",
    "Built custom data parsers using Python Abstract Syntax Trees.",
    "Developed and parsed base64-based data from IoT hardware, and transformed it with mathematical formulas to display for end-users.",
    "Integrated and configured Kubernetes Liveness Probes to keep the server alive.",
    "Developed AWS SQS consumers to generate CSV reports and published them to AWS S3.",
    "Developed KSQL Applications in Confluent Kafka.",
    "Developed Serverless Applications using AWS Lambda and AWS SAM.",
    "Tested REST APIs using Postman.",
    "Monitored Production Error logs after deployments.",
  ];

  const netcubeExperience = [
    "Developed and maintained a human resources management web application for internal usage, using Angular and C# on the .NET Framework.",
  ];

  return (
    <>
      <section className="container flex flex-col items-center justify-center py-6">
        <div className="pb-6 text-5xl font-extrabold italic md:text-6xl">
          Resume
        </div>

        <div>
          <Link
            to="/resume/Resume-noppadon.pdf"
            target="_blank"
            className="flex items-center gap-4 hover:underline"
          >
            <ReactSVG className="h-10 w-10" src={"./icons/Download.svg"} />
            My resume
          </Link>
        </div>

        <div className="mt-6 mb-3 w-full text-2xl font-extrabold italic md:text-4xl">
          Professional Experience
        </div>
        <div className="w-full">
          <Timeline>
            {/* Wawa */}
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>May 2023 - Feb 2025</TimelineTime>
                <TimelineTitle>
                  <div className="flex flex-col-reverse md:flex-row items-start gap-4 md:items-center justify-between">
                    <div>
                      <p>Full-Stack Developer</p>
                      <p>Wawa Service and Marketing Group Co., LTD.</p>
                    </div>

                    <div className="flex gap-4">
                      <img
                        src={"../images/companies/wawa-x.jpg"}
                        alt={"Wawa-x - Digital transformation consultancy"}
                        className="w-30 rounded-lg"
                      />
                      <img
                        src={"../images/companies/mywawa-logo.png"}
                        alt={"Wawa-x - Digital transformation consultancy"}
                        className="w-30 rounded-lg"
                      />
                    </div>
                  </div>
                </TimelineTitle>
                <TimelineBody>
                  <ul className="flex flex-col gap-4">
                    {wawaExperience.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>

            {/* Energy Response */}
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>Mar 2020 - Apr 2023</TimelineTime>
                <TimelineTitle>
                  <div className="flex flex-col-reverse md:flex-row items-start gap-4 md:items-center justify-between">
                    <div>
                      <p>Software Engineer</p>
                      <p>Energy Response CO., LTD,</p>
                    </div>

                    <img
                      src={"../images/companies/boda-logo.png"}
                      alt={"BODA - Technology & Consultancy"}
                      className="w-30 rounded-lg"
                    />
                  </div>
                </TimelineTitle>
                <TimelineBody>
                  <ul className="flex flex-col gap-4">
                    {enresExperience.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>

            {/* Net cube */}
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>Jun 2019 - Feb 2020</TimelineTime>
                <TimelineTitle>
                  <div className="flex flex-col-reverse md:flex-row items-start gap-4 md:items-center justify-between">
                    <div>
                      <p>Full-Stack Developer</p>
                      <p>Net Cube CO., LTD.</p>
                    </div>

                    <img
                      src={"../images/companies/netcube-logo.png"}
                      alt={"Netcube - Business Application Development"}
                      className="w-30 rounded-lg"
                    />
                  </div>
                </TimelineTitle>
                <TimelineBody>
                  <ul className="flex flex-col gap-4">
                    {netcubeExperience.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div className="mt-6 mb-3 w-full text-2xl font-extrabold italic md:text-4xl">
          Education
        </div>
        <div className="w-full">
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>August 2015 - May 2019</TimelineTime>
                <TimelineTitle>
                  Kasetsart University Sriracha Campus
                </TimelineTitle>
                <TimelineBody>
                  Bachelor's Degree in Computer Science (GPA. 3.95)
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </section>
    </>
  );
}
