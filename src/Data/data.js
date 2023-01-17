

const RelatedWorksData =  [
    {
        id: 1,
        year: "2019",
        test: "150",
        title: "Lexicon-based Bot-aware Public Emotion Mining and Sentiment Analysis of the Nigerian 2019 Presidential Election on Twitter",
        img: "../images/related1.png",
        cite: "Temitayo & Thakur",
        note: "Lexicon-based public emotion mining and sentiment analysis was applied to predict the win in the 2019 presidential election in Nigeria. About 224,500 tweets were gathered pertaining the two most prominent political parties (APC & PDP) and their representatives (Muhammadu Buhari and Atiku Abubakar) between 9th October 2018 and 17th December 2018 via Twitter's streaming API. The result of the party-based and the candidate-based sentiment analyses indicate that the public prefers APC to emerge as the ruling party but with a higher level of distastefulness for Buhari than Atiku. \nHowever, the outcome of the actual election held on the 23 February 2019,  declared Buhari as the presidential winner with 15.2 million votes over PDP‟s Atiku with 11.3 million votes. It was further stated that Buhari won in 19 out of the 36 states in Nigeria while Atiku won in the remaining 17 states. The actual outcomes corroborate the predictions. The Multinomial Naive Bayes could have been used instead as it usually shows a better accuracy than the lexicon-based method for emotion mining. Along with simplicity, Naive Bayes is known to outperform even highly sophisticated classification methods. \n"
    },
    {
        id: 2,
        year: "2020",
        test: "200",
        title: "Location-based Sentiment Analysis and Visualization of Twitter Election Data",
        img: "../images/related2.png",
        cite: "Yaqub et al.",
        note: "Sentimental analysis of twitter location data was performed using two case studies: US presidential elections of 2016 and UK general elections of 2017 with the aim to evaluate similarity between sentiment of location-based tweets and on-ground public opinion reflected in election results. For UK elections, two disparate datasets were downloaded, one using election-related keywords and the second using location coordinates of the tweets.  \nPython TextBlob for Natural Language Processing (NLP) was used to perform subjectivity analysis on the dataset. The purpose of analyzing user subjectivity was to evaluate whether Twitter users were tweeting or re-tweeting facts during political debate or whether most of their messages were emotional subjective opinions. Also a Polarity analysis of the Twitter dataset organized into US states using location attributes was performed and  calculated the average sentiment for both candidates for each state. Then the state-wise sentiment was compared with the actual election result to test the accuracy of Twitter sentiment analysis based on location. \nAt the end of the day it was observed that sentiment based on location did reflect on ground public opinion.  In terms of subjectivity and polarity analyses of US election data, it was observed tweets mentioning Donald Trump as having higher subjectivity than ones discussing Hillary Clinton. Although Clinton won the elections in 2 states(New York and Illinois), Clinton had a lower polarity score in the data analysis conducted. However, scores in both cases were within margin of error. According to popular opinion VADER provides more granular sentiment than TextBlob and takes capitalization, repeated words, and emoji into consideration when evaluating the sentiment of the text hence would be a better option for NLPn"
    },
    {
        id: 3,
        year: "2019",
        test: "60",
        title: "Lexicon-based Twitter sentiment analysis for vote share prediction using emoji and N-gram features",
        img: "../images/related3.png",
        cite: "Bansal & Srivastava",
        note: "The research was conducted to predict vote shares of 2017 Uttar Pradesh (UP) legislative elections using N-gram features. Emoji sentiments were also detected and incorporated to predict the vote shares as social media users use emojis most often as a form of expression. Approximately 300,000 tweets were gathered over a period of eight days with the help Twitter search  API and package 'twitteR' in R. So out of  297,000 tweets left after pre-processing, a total of 4,305 tweets contain emojis (1.45%). \nIn this study, after combining emoji sentiments, the Mean Absolute Error (MAE) for most of the lexicons show marginal improvements in case of magnitude-based criteria. So it was proven that  emoji sentiments when combined with sentiments extracted from textual features can correctly classify the sentiment polarity of tweets. However a limitation to this study is seen in the fact that there is a very small amount of emoji (1.45%) detected in the data and it is believed that increasing the size of emoji lexicons will improve the accuracy of the predictions. \n"
    },
    {
        id: 4,
        year: "2019",
        test: "100",
        title: "Social media campaign strategies: Analysis of the 2019 Nigerian elections",
        img: "../images/related4.png",
        cite: "Bello et al.",
        note: "For this study, a Sentiment Analysis of tweets was conducted to try and understand the strategies made by candidates and parties running for the Nigerian 2019 presidential election and  the degree of their campaign on social media. A Twitter API was used to collect tweets from 4 December 2019 to 12 February 2019 and the dataset consisted of Political Parties, Presidential Candidates and News Media and the Public. VADERwas used to analyze the sentiment of the tweets also taking into consideration the location of the tweets. \nFinally, the actual election results were compared with their predicted results across various states of the country and their Twitter analysis predicts the winner correctly in 24 states out of the 37 states (64.8%). And it was concluded that more effective and intelligent use of these platforms will be a crucial factor in improving the approval level of political parties or politicians vying for elected positions. In this research, a limitation is the fact that political parties were not aware of the influence of social media during political campaigns. If it was otherwise, maybe the data gathered would have given a different result. \n"
    },
    {
        id: 5,
        year: "2021",
        test: "150",
        title: "Sentiment Analysis of before and after Elections: Twitter Data of U.S. Election 2020 ",
        img: "../images/related5.png",
        cite: "Chaudhry et al.",
        note: "witter sentiment was analyzed to determine public views before, during, and after elections and compared them with actual election results. The research employed TF-IDF to extract features from the given tweet and used a Naive Bayes classifier to obtain positive or negative sentiment for the given candidate. A total of 38,432,811 tweets were collected, employing the streaming Tweepy API across the US between 28/09/2020 and 20/11/2020. Tweets without location were filtered and the top five tweets per user per day were used due to spamming users. \nThe final solution shows that for all states where sentiment results of the study did not corroborate with election results, long-term trends before and after the election reveal that there was an increase in the positive sentiment of the winning candidate. At the same time, there was a decrease in positive sentiment for the losing candidate. So a conclusion was made that the sentiment analysis results show a similar trend in the presidential elections despite allegations of rigging or election fraud (Chaudhry et al., 2021).  \n"
    },
    {
        id: 6,
        year: "2018",
        test: "230",
        title: "Analysis and Visualization of Subjectivity and Polarity of Twitter Location Data",
        img: "../images/related6.png",
        cite: "Yaqub et al.",
        note: "A study was carried out which presented a web application which can be used to perform subjectivity and polarity analysis of Twitter location data. This allowed them to perform user sentiment and behavioral analysis based on their location. The primary purpose of this study was to utilize this location information, contained in the message metadata to create a more sophisticated and detailed analysis of user subjectivity and polarity during the elections.  \nIn the subjectivity analysis, there was an observation that tweets mentioning Donald Trump were more emotional and opinionated than factual.. However, Results of polarity analysis show it was able to correctly gauge public sentiment in 8 out of the 10 states under study. For two states, where Hillary Clinton was victorious, the dataset showed Trump as having better sentiment. Although, polarity scores of the candidates were within the margin of error. During data gathering, only 2 keywords were used (“Trump” and “Clinton”). This limits the dataset and causes bais as there are other things to consider like hashtags and other terms. \n"
    },
    {
        id: 7,
        year: "2018",
        test: "20",
        title: "Prediction of 2019 Indian Election Using Sentiment Analysis",
        img: "../images/related7.png",
        cite: "Naiknaware & Kawathekar",
        note: "The study was conducted with the aim to study and compare people's opinions on Indian Government Schemes and to evaluate the reputation of Schemes using sentiment analysis. A dataset was gathered using the \"twitterR\" Library which enables R to use Twitter API. Then the data was preprocessed to ensure data consistency. The schemes include GST, Demonetization, Digital India, Make in India, Swacha Bharat, Startup India, Kashmir and Yoga day. \nOverall opinions of people on the GST scheme, Digital India scheme, Make in India scheme, Startup India scheme, Swacha Bharat scheme and Yoga Day scheme are positive. While the overall opinions of peoples on Demonetization scheme and Kashmir scheme are negative. A limitation to this study is in the size of the dataset. Increasing the size of the dataset would have increased the accuracy of the data. And also a subjectivity analysis was not performed on the data to analyze the emotions of the users while tweeting. Subjectivity combined with polarity is a good combo for sentiment analysis. \n"
    },
    {
        id: 8,
        year: "2018",
        test: "90",
        title: "A Method for Predicting the Winner of the USA Presidential Elections using Data extracted from Twitter",
        img: "../images/related8.png",
        cite: "Oikonomou & Tjortjis",
        note: "This study focused on the presidential elections in the USA that were scheduled for November 8th 2016.  The goal was to gather tweets that refer to the elections and more specifically to the two main candidates: Hillary Clinton and Donald J. Trump. For data gathering,  Twitter Search API was used which provides useful parameters to data analysts. Some data were considered polarized beforehand and then the data set was preprocessed. For the Analysis, Naive Bayes Model was used to classify tweets into positive, negative and neutral while Textblob, a Python library, was used to assign subjectivity scores. \nThis work aimed at predicting the USA elections in three key states that could potentially determine the final result. In Florida, Trump had 58.26% while Clinton had 35.4%. In Ohio, Trump had 49.1% while Clinton had 47.8%. In Carolina, Trump had 53.26% while Clinton had 38.5%. When checked with the actual results, it is seen that the study accurately predicts the winners in each of the 3 states. However, there are some tools that can help to perform sentiment analysis more easily. One of the tools we could use is Lexicons. One of the most commonly used is SentiWordNet. \n"
    },
    {
        id: 9,
        year: "2020",
        test: "170",
        title: "Sentiment Analysis of Tweets to Gain Insights into the 2016 US Election",
        img: "../images/related9.png",
        cite: "Agrawal & Hamling",
        note: "The aim was to predict the results of the 2016 United States presidential election by looking at tweets that mention either candidate, and analyzing them to determine an overall sentiment. An algorithm that implemented the Twitter4J library was developed to collect data. Sentiment was then determined using the sentiment wordmap file from SentiWordNet with some modifications and additions to words associated with the election. Negation words were recognized and analyzed appropriately. To further refine our results, duplicate tweets were removed. \nAt the end of the analysis, results from Twitter sometimes matched, but were not always accurate with the results of the Electoral College. Of the 50 states plus Washington DC, 34 states had results from Twitter that matched their Electoral College results. A limitation found in this study is in the fact that  If a tweet were to mention both Trump and Clinton, the algorithm would not identify who the subject was or who to give the sentiment score to, and so the tweet would be discarded. This could also create bias in the dataset. \n"
    },
    {
        id: 10,
        year: "2019",
        test: "299",
        title: "Social Media and Sentiment Analysis: The Nigeria Presidential Election 2019 ",
        img: "../images/related10.png",
        cite: "Oyebode & Orji",
        note: "These two conducted a study to identify and analyze public sentiments towards two popular candidates with the aim of determining their chances of being elected into the highest position of authority in Nigeria based on social media comments. The methodology used by the pair was based on sentiment analysis of election-related posts from Nairaland (a social network targeted at Nigerians) using lexicon-based and supervised machine learning, ML techniques with the aim of detecting their sentiment polarity , i.e. negative or positive. \nA total of 118,421 posts were accumulated between the dates of January 1 and February 22, 2019. Implementation and comparative analysis of the performances of three lexicon-based classifiers and five ML classifiers was conducted while the best performing classifier was used in determining the sentiment polarity of posts. Analysis of both the positive and negative result was done to further understand public opinion and the chances each candidate had in winning the election, and our findings relate considerably to the actual election results released by the Independent National Electoral Commission (INEC).  \n"
    },
]

export default RelatedWorksData;