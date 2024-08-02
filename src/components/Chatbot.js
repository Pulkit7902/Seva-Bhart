const Chatbot = () => {
  <div className="text-white">
    hello
  </div>
  window.watsonAssistantChatOptions = {
    integrationID: "8859cd7b-c22e-40a4-964c-5c1be9658ac1", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "a9d72189-bb5f-45ca-8d97-97347812ae87", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
}
export default Chatbot
  