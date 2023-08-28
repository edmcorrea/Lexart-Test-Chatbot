import { createChatBotMessage } from 'react-chatbot-kit';
import OptionsLoan from '../components/LoanOptions';
import OptionsLoanAnyMore from '../components/LoanAnyMoreOptions';

const config = {
  initialMessages: [createChatBotMessage(`Hi! My name is Luzia. Let's talk!`)],
  // header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
  botName: 'Luzia',
  widgets: [
    {
      widgetName: 'optionsLoan',
      widgetFunc: (props) => <OptionsLoan {...props} />,
    },
    {
      widgetName: 'optionsLoanAnyMore',
      widgetFunc: (props) => <OptionsLoanAnyMore {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
  },
};

export default config;