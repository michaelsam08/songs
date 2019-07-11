import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  headings: {
    color: "blue"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3" component="h3">
          MICHAEL SAMARA
        </Typography>

        <Typography variant="h5" component="h3">
          Summary{" "}
        </Typography>
        <Typography component="p">
          Michael is an energetic and highly dependable Software Developer that
          loves to build things and solve problems. He uses the following
          technologies in his projects: JavaScript, React, Firebase, AWS,
          Express, Redux, MongoDB, SQL/SQL Server, Node.js, CSS and HTML. He is
          an effective, process-driven developer who is passionate about
          creating meaningful User Interfaces that businesses and their end
          users enjoy. Michael highly values collaboration and is an effective
          communicator of technical terms within all organizational areas. An
          enthusiastic problem solver with demonstrated experience contributing
          to and leading cross-functional teams.
        </Typography>
        <Typography className={classes.headings} variant="h5" component="h3">
          Experience
        </Typography>
        <Typography component="p">
          WEB INK Austin, TX Role: Software Developer / Sole Proprietor
          3/18-Present Transitioning an application to be web-based and software
          as a service for an educational consulting company that is used in
          classrooms K-12 in multiple school districts in the state of TX
          Development of dashboard, modals and features of the front-end using
          JavaScript, React.js, and CSS Sending and storing data (users, games,
          passwords) with express, node and MongoDB In May 2019 I was fortunate
          enough to use the current version of the app live with classrooms in
          Ecuador demonstrating the applications ease of use and impactfulness
          in the classroom
        </Typography>
        <br />
        <Typography component="p">
          VersaSuite EHR and HR Austin, TX Role: Software Developer 11/18-6/19
          Create meaningful dashboards, modules and features for patients and
          care providers using JavaScript, React and multiple libraries to
          maximize user experience through thoughtful placement of components
          and modules Utilize RESTful APIs with ASP.net (C#) models and
          controllers to communicate with our SQL/ SQL Server Db Build reusable
          components whenever possible that allow users to perform and/or see a
          multitude of tasks or file types I was asked to be project manager
          after 5 weeks in the role due to dependability and past business
          experience leading projects and teams (while I am an informal leader
          my focus is to become a better developer) Demo and present our web
          applications to clients, collect feedback and implement changes
        </Typography>
        <Typography component="p">
          AUSTIN CODING ACADEMY Austin, TX Role: Tutor and Affiliate 10/18-
          Present Provide individual and small group tutoring, study sessions
          and encouragement to students of Austin Coding Academy where we talk
          through and write code in JavaScript, HTML, CSS and collaborate using
          GitHub Assist students in improving academic achievement by meeting
          with them to clarify learning objectives and help with understanding
          of concepts of programming ACA was my first live course introduction
          to programming and now I am helping them as a tutor
        </Typography>
      </Paper>
    </div>
  );
}
