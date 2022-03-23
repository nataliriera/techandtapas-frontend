
import './newsitem.css'
import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';



const NewsItem = ({ title, description, url, urlToImage,author,publishedAt}) => {
    return (
        <div className="news-app">
          
        <Card className='news-item' sx={{ maxWidth: 345 }} style={{backgroundColor:'#1E1E1E'}}>
        
        <CardMedia className='news-img'
        component="img"
        alt={urlToImage}
       
        image={urlToImage}
        />
        
        <CardContent className='news-content'>
        
        <Typography gutterBottom variant="h4" component="div">
        {title}
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary">
        {description}
        </Typography>
        
      </CardContent>
      
        <CardActions className='news-actions'>
            <a href= {url} target="_blank">
            <Button size="small" >Learn More</Button>
            </a>
            <Typography variant="body1" color="text.secondary">
        Author: {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Published: {publishedAt}
        </Typography>
        </CardActions>
    
    </Card>
        </div>
    )
}

export default NewsItem