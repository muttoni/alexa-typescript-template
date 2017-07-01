import * as Alexa from 'alexa-sdk'

// This is the function that AWS Lambda calls every time Alexa uses your skill.
export const handle = (event, context, callback) => {
  // Create an instance of the Alexa library and pass it the requested command.
    const alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
  'LaunchRequest': function () {
      this.emit('HelloWorldIntent');
  },

  'getRandomInt': function () {
      this.emit(':tell', 'Hello World from Alexa!');
  }
};