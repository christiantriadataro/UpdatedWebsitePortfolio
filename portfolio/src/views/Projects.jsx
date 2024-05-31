import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ScrollbarToggler from "../components/AboutMe/SideDescription/ScrollbarToggler.jsx";
import SideCategories from "../components/Projects/SideCategories.jsx";
import ProjectCard from "../components/Projects/ProjectCard.jsx";
import BBMCImage from '../assets/image/bbmc-final.png'
import iClickImage from '../assets/image/iclick-final.png'
import JetaImage from '../assets/image/jeta-final.png'
import MDCCImage from '../assets/image/mdcc-final.png'
import AutoAxisImage from "../assets/image/autoaxis.png"
import SEAMACImage from "../assets/image/seamac.png"
import UNODOSImage from "../assets/image/unodosImage.png"
import DataCampImage from "../assets/image/datacamp.png"
import JetbrainPython from "../assets/image/jetbrains_django_python.png"
import JetbrainJava from "../assets/image/jetbrains_java.png"
import INBETWEEN from "../assets/image/inbetween.png"

import ReactIcon from "../assets/icons/react.svg"
import CompanyIcon from "../assets/icons/company-scale-project.svg"
import SideIcon from "../assets/icons/side-project.svg"
import SmallIcon from "../assets/icons/small-project.svg"
import TailwindIcon from "../assets/icons/tailwind.svg"
import DjangoIcon from "../assets/icons/django.svg"
import FigmaIcon from "../assets/icons/figma.svg"
import PHPIcon from "../assets/icons/php.svg"
import RESTAPIIcon from "../assets/icons/rest-api.svg"
import UnityIcon from "../assets/icons/unity.svg"
import AIIcon from "../assets/icons/machine-learning.svg"
import {useState} from "react";

const projects = [
    {
        'image': INBETWEEN,
        'project name': 'IN BETWEEN',
        'categories': ['Company Scale Project', 'UI/UX Figma', 'React', 'Tailwind', 'Django', 'REST API'],
        'description': [
            'Designed UI/UX using Figma to create visually appealing and intuitive interfaces.',
            'Created a Prototype to propose a visually appealing and intuitive interfaces to the stakeholders.',
            'Transformed Swagger API documentation into functional components for seamless integration with frontend applications.',
            'Established the Web App based on the following: Overall Admin, Admin, Declarator, Guarantor, Master Agent, Sub-Agent, Player',
            'Collaborated with backend developers to integrated real-time data using Signal R and other backend APIs '
        ]
    },
    {
        'image': UNODOSImage,
        'project name': 'SABONG (Indonesia): PWA',
        'categories': ['Company Scale Project', 'React','UI/UX Figma', 'Tailwind', 'Django', 'REST API'],
        'description': [
            'Transformed Swagger API documentation into functional components for seamless integration with frontend applications.',
            'Designed UI/UX using Figma to create visually appealing and intuitive interfaces.',
            'Established the Web App based on the following: Overall Admin, Admin, Declarator, Guarantor, Master Agent, Sub-Agent, Player',
            'Collaborated with backend developers to integrated real-time data using Signal R and other backend APIs '
        ]
    },
    {
        'image': UNODOSImage,
        'project name': 'SABONG (Phillipine and Korea): PWA',
        'categories': ['Company Scale Project', 'UI/UX Figma', 'React', 'Tailwind', 'Django', 'REST API'],
        'description': [
            'Transformed Swagger API documentation into functional components for seamless integration with frontend applications.',
            'Designed UI/UX using Figma to create visually appealing and intuitive interfaces.',
            'Established the Web App based on the following: Overall Admin, Admin, Declarator, Guarantor, Master Agent, Sub-Agent, Player',
            'Collaborated with backend developers to integrated real-time data using Signal R and other backend APIs '
        ]
    },
    {
        'image': SEAMACImage,
        'project name': 'CourseForge: Course Management System with hybrid recommender system',
        'categories': ['Company Scale Project', 'React', 'UI/UX Figma', 'Tailwind', 'AI/Machine Learning', 'Django', 'REST API'],
        'description': [
            'Freelance Undergraduate Thesis Project for S.Y. 2023-2024',
            'Designed the UI/UX using Figma, resulting in a visually appealing and intuitive interface.',
            'Built using React.js, TailwindCSS, MongoDB, and Django, ensuring a seamless user experience.',
            'Designed a course management module that allows instructors to evaluate each student’s course.',
            'Constructed an examination module that will be able to make exams provided by the instructors and that will be taken by the students.',
            'Incorporated a recommendation module for students to learn the topics efficiently.',
            'Other Technologies: Heroku, Git, WebStorm, Postman, PyCharm Professional, Google Colab, Jupyter Notebook',
        ]
    },
    {
        'image': AutoAxisImage,
        'project name': 'Auto Axis: A Web Auto Repair Shop Management System and a Mobile Proximity Geolocation Services',
        'categories': ['Company Scale Project', 'React', 'UI/UX Figma', 'Tailwind', 'AI/Machine Learning', 'Django', 'REST API'],
        'description': [
            'Freelance Undergraduate Thesis Project for S.Y. 2023-2024',
            'Designed the UI/UX using Figma, resulting in a visually appealing and intuitive interface.',
            'Built using React.js, TailwindCSS, MongoDB, and Django, ensuring a seamless user experience.',
            'Created a reservation module for the customers of Kloud Garage.',
            'Integrated a vehicle maintenance record module.',
            'Built an inventory module and a payroll module for the shop and its employees.',
            'Integrated OpenStreetMap api to serve as the geolocator tool.',
            'Created a pin locator for roadside/towing services and implement it using the dijkstra algorithm.',
            'Other Technologies: Heroku, Git, WebStorm, Postman, PyCharm Professional, Google Colab, Jupyter Notebook',
        ]
    },
    {
        'image': BBMCImage,
        'project name': "Padayon\'s Tech: Online Ordering and Inventory Management System using Time Series and Analysis with ARIMA Model for Bagong Barrio Merchandise and Construction",
        'categories': ['Company Scale Project','UI/UX Figma', 'React', 'Tailwind', 'AI/Machine Learning', 'Django', 'REST API'],
        'description': [
            'Freelance Undergraduate Thesis Project for S.Y. 2023-2024',
            'Designed the UI/UX using Figma, resulting in a visually appealing and intuitive interface.',
            'Built using React.js, TailwindCSS, MongoDB, and Django, ensuring a seamless user experience.',
            'Preprocessed data using Pandas and NumPy to improve time series analysis and forecasting accuracy.',
            'Hypertuned the ARIMA model using scikit-learn to optimize forecasting results.',
            'Created recommendation systems and notifications for predicting the in-demand stocks this month.',
            'Streamlined the ordering and inventory management process, making it more efficient for users.',
            'Created a pin locator for roadside/towing services and implement it using the dijkstra algorithm.',
            'Other Technologies: Heroku, Git, WebStorm, Postman, PyCharm Professional, Google Colab, Jupyter Notebook',
        ]
    },
    {
        'image': MDCCImage,
        'project name': "MDCC Intranet: Employees e-learning platform with CMS",
        'categories': ['Company Scale Project', 'UI/UX Figma', 'React', 'Tailwind'],
        'description': [
            'Developed MDCC Intranet, an employees e-learning platform with CMS.',
            'Designed the UI/UX using Figma, resulting in a visually appealing and user-friendly interface.',
            'Utilized TailwindCSS and jQuery to ensure a seamless user experience.',
            'Implemented a content management system (CMS) for easy management and updating of platform content.',
            'Added it to AWS and Azure using Python, ensuring easy access and scalability.',
        ]
    },
    {
        'image': JetaImage,
        'project name': "JETA: The Nutritional meal ordering and Delivery App with Web-based Admin Management",
        'categories': ['Company Scale Project', 'React', 'UI/UX Figma','Tailwind', 'Django', 'REST API'],
        'description': [
            'Freelance Undergraduate Thesis Project for S.Y. 2022-2023',
            'Designed the UI/UX of the mobile and website using Figma, resulting in a visually appealing and intuitive interface.',
            'Built using React.js, TailwindCSS, Django, Kotlin, and MongoDB to ensure a seamless user experience.',
            'Other Technologies: Heroku, Git, WebStorm, Postman, Android Studio, Intellij IDEA Ultimate',
        ]
    },
    {
        'image': iClickImage,
        'project name': "iClick: A Mobile and Web-based application for barangay Camp Aguinaldo using Apriori Algorithm",
        'categories': ['Company Scale Project', 'React', 'UI/UX Figma', 'Tailwind', 'AI/Machine Learning', 'Django', 'REST API'],
        'description': [
            'Freelance Undergraduate Thesis Project for S.Y. 2021-2022',
            'Designed the UI/UX of the mobile and website using Figma, resulting in a visually appealing and intuitive interface.',
            'Implemented the Apriori Algorithm to suggest relevant announcements and services to users.',
            'Utilized React.js, TailwindCSS, Django, Kotlin, and MongoDB to provide a seamless user experience.',
            'Other Technologies:  Heroku, Git, WebStorm, Postman, Android Studio, Intellij IDEA Ultimate',
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Naive Bees: Image Loading and Processing',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Load, transform, and understand (ETL) images of honey bees and bumble bees in Python.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'The Hottest&nbsp; Topics in Machine Learning',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Used Natural Language Processing on NIPS papers to uncover the trendiest topics in machine learning research.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Naive Bees: Species from Images',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Built a model that can automatically detect and bumble bess in images.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Classify Song Genres from Audio Data',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Rock or rap? Applied machine learning&nbsp; methods in Python to classify songs into genres.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Predict Taxi Fares with Random Forests',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Used regression trees and random forests to find places where New York taxi drivers earn the most.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'ASL Recognition with Deep Learning',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Built a convolutional neural network to classify images of letters from American Sign Language.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Clustering Heart Disease Patient Data',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Experimented with clustering algorithms to help doctors inform treatment for heart disease patients.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Naive Bees: Deep Learning with Images',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Built a deep learning model that can automatically detect honey bees and bumble bees in images.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Predicting Credit Card Approvals',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Built a machine learning model that can predict if a credit card application will get approved.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Degrees that Pay you back',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Explored the salary potential of college majors with a k-means cluster analysis.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Planning Public Policy in Argentina',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Applied unsupervised learning techniques to help plan an education program in Argentina'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Clustering Bustabit Gambling Behavior',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Used clustering analysis to glen insights into cryptocurrency gambling behavior.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Give Life: Predict Blood Donations',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Built a binary classifier to predict if a blood donor is likely to donate again.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Find Movie Similarity from Plot Summaries',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Used NLP and clustering on movie plot summaries from IMDb and Wikipedia to quantify movie similarity.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Comparing Cosmetics by Ingredients',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Processed Ingredient lists for cosmetics on Sephora then visualize similarity using t-SNE and Bokeh.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'The Impact of Climate&nbsp; Change on Birds',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Predicted the impact of climate change on bird distributions using spatial data and machine learning.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'What Makes a Pokemon Legendary?',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Used tree-based machine learning methods to identify the characteristics of legendary Pokemon.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Predictive Modeling for Agriculture',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Took a hands-on learning into the fascinating world of agriculture with this use case! Discovered how multi-class machine learning is being utilized to assist farmers in cultivating the perfect crop each season. Through hands-on experiences with actual scenarios, I have learned the art of applying supervised ML and feature selection techniques to solve real-world problems.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Predicting Move Rental Durations',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Helped a DVD rental company improved their inventory planning by building a regression model to predict customers DVD rental duration. Assess different regression models to recommend the most effective one to the company.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Interpreting Unsupervised Learning Models',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Arctic Penguin Exploration: Unraveled Clusters in the Icy Domain with K-means Clustering.'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Planning a Trip to Paris with the OpenAI API',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            "Use OpenAI's powerful API to answer questions about tourist attractions in Paris."
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Reducing Traffic Mortality in the USA',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'How can we find a good strategy for reducing traffic-related deaths?'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Modeling Car Insurance Claim Outcomes',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Cleaned customer data and used logictic regression to predict whether people will make a claim on their car insurance!'
        ]
    },
    {
        'image': DataCampImage,
        'project name': 'Predicting Temperature in London',
        'categories': ['Side Project', 'AI/Machine Learning'],
        'description': [
            'Perform a machine learning experiment to find the best modal that predicts the temperature in London!'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Cinema REST&nbsp;Room Manager',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'In this project, We created a simple Spring REST service that helped to manage a small movie theater. It handles HTTP requests in controllers, create services, and respond with JSON objects.'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Readability Score',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'You will understand the process of developing such a complex program as a game and learn about processing user input and handling errors.'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Battleship',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'You will understand the process of developing such a complex program as a game and learn about processing user input and handling errors.'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Traffic Light',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'By the end of this project, in addition to creating your own "traffic light", you will learn how to work with multi-threading, handle exceptions, inherit classes, and implement and apply the circular queue data structure'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Rock-Paper-Scissors',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'A playable Rock-Paper-Scissors game, with a Player vs. Computer mode. Practice using arrays, the Random class, formatted strings, and algorithms.'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Bulls and Cows',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'Learn how to use integer arithmetic, generate random numbers, store data in data structures, and handle errors'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Chuck Norris Cipher En coder',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'This project will allow us to deal with string and character variables and work with loops and conditional statements. Get familiar with the binary notation and data type conversion. Create an application for the unary representation and decoding of any text.'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Coffee Machine',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'This project allows to better understand the basic OOP, its main concepts such as classes, class methods and attributes, and get a taste of Java. Practice working with methods, challenge yourself with loops and conditions, and get more confident with OOP.'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Amazing Numbers',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'The project covers basic operations on integers, as well as with collections. Make a program that indicates the properties of the numbers taken from the input'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Simple Tic-Tac-Toe',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'After finishing this project, We getting to know a lot about planning and developing a complex program from scratch, using methods, nested lists, list comprehension, handling errors, and processing user input.'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Cinema Room Manager ',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'This project is a good opportunity to work with input and output in Java. You will deal with arrays and functions as well as loops and conditional statements.'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Zookeeper',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'It helps you understand some syntax basics and learn how to work with variables, data storage types such as arrays, and while loops.'
        ]
    },
    {
        'image': JetbrainJava,
        'project name': 'Simple Chatty Bot',
        'categories': ['Side Project', 'Java', 'REST API'],
        'description': [
            'Getting to know the basic syntax of Java and write a simple program using variables, conditions, loops, and methods.'
        ]
    },
    {
        'image': JetbrainPython,
        'project name': 'HyperSchool',
        'categories': ['Side Project', 'Django', 'REST API'],
        'description': [
            'Created models and forms. Also, developed a page templates and understand how to store and represent data with Django.'
        ]
    },
    {
        'image': JetbrainPython,
        'project name': 'HyperNews Portal',
        'categories': ['Side Project', 'Django', 'REST API'],
        'description': [
            'I learn the basics of creating web applications with the Django framework: handle data through HTTP and work with HTML templates. The project also work with json files and python DataTime type, as well as design using vanilla CSS.'
        ]
    },
    {
        'image': JetbrainPython,
        'project name': 'HyperJob Agency',
        'categories': ['Side Project', 'Django', 'REST API'],
        'description': [
            'Created a dynamic website with Django.&nbsp;'
        ]
    },
    {
        'image': JetbrainPython,
        'project name': 'HyperForms',
        'categories': ['Side Project', 'Django', 'REST API'],
        'description': [
            'I set up a simple Django project. Handle requests and made templates for the web pages. Also, It has how to save and retrieve data from a database'
        ]
    },
]

const Projects = () => {
    const category = [
        {'Company Scale Project': CompanyIcon},
        {'Side Project': SideIcon},
        {'Small Project': SmallIcon},
        {'UI/UX Figma': FigmaIcon},
        {'React': ReactIcon},
        {'Tailwind': TailwindIcon},
        {'AI/Machine Learning': AIIcon},
        {'Java': PHPIcon},
        {'Unity': UnityIcon},
        {'Django': DjangoIcon},
        {'REST API': RESTAPIIcon},
    ]
    const [isChecked, setIsChecked] = useState(Array(category.length).fill(false))
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isHeaderClicked, setIsHeaderClicked] = useState(false)
    const filteredData = projects.filter((item) => {
        // Check if any categories are selected
        if (selectedCategories.length === 0) {
            // Handle the case when no categories are selected
            return true; // Show all data
        }

        // Use .every() to check if all selected categories exist in item.categories
        return selectedCategories.every((cat) => item.categories.includes(cat));
    });
    return (
        <div
            className="bg-[#011627] overflow-hidden w-full h-full mx-auto rounded-md flexflex-col lg:justify-between border border-[#1E2D3D]">
            <Header isHeaderClicked={isHeaderClicked} setIsHeaderClicked={setIsHeaderClicked}/>
            <div
                className={`h-[56px] lg:hidden flex items-center pl-[18px] border-l border-[#1E2D3D] lg:hover:bg-gray-800 border-b-2 text-[14px] text-gray-300 border-b-[#1E2D3D]`}>
                _projects
            </div>
            <div className="w-full flex flex-col lg:flex-row">
                <SideCategories categories={category} isChecked={isChecked} setIsChecked={setIsChecked}
                                currentCheck={selectedCategories} setCurrentCheck={setSelectedCategories}/>
                <div
                    // lg:w-4/12 xl:3/12
                    className="h-screen xl:w-8/12 lg:9/12 px-5 lg:py-10 lg:pb-32  lg:pr-3 flex lg:flex-row flex-col lg:flex-wrap lg:justify-center   overflow-y-auto lg:gap-x-5 gap-y-8 no-scrollbar">
                    {
                        filteredData.map((project, index) => (
                            <ProjectCard categories={category} key={index} project={project} index={index}
                            />
                        ))
                    }
                </div>
                <div className="hidden w-[20px] h-full pt-1 lg:flex justify-center">
                    <ScrollbarToggler/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Projects