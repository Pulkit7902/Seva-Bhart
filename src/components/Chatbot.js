const Chatbot = () => {
    window.watsonAssistantChatOptions = {
      integrationID: "8888e275-6c4c-418b-972c-5e3a164b7638", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "a9d72189-bb5f-45ca-8d97-97347812ae87", // The ID of your service instance.
      onLoad: async (instance) => { await instance.render(); }
    };
    
    setTimeout(function() {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }, 0); // Add a delay of 0 milliseconds
  }
export default Chatbot
  