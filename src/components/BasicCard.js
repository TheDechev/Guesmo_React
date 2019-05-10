import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const BasicCard = ( {cardTitle, cardSubtitle, cardIcon, cardImageURL, props} ) => {

    return (
        <Card>
            <Card.Title title={cardTitle} subtitle={cardSubtitle} left={(props) => <Avatar.Icon {...props} icon={cardIcon} />} />
            <Card.Content>
                <Title>{cardTitle}</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: cardImageURL }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    );
};

export { BasicCard };

