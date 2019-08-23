namespace IIS.Product_2690
{
    using System;
    using System.Web;
    using System.Web.Http;

    using ICSSoft.STORMNET.Business;
    using System.Web.Configuration;

    using Microsoft.Practices.Unity.Configuration;
    using Unity;
    using ICSSoft.STORMNET.Web;

    public class Global : HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {

            ServiceConfig.ConfigureServices();
            IUnityContainer container = new UnityContainer();
            container.LoadConfiguration();
            container.RegisterInstance(DataServiceProvider.DataService);
            GlobalConfiguration.Configure(configuration => ODataConfig.Configure(configuration, container));
        }
    }
}
