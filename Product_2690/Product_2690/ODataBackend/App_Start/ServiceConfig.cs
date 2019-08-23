namespace ICSSoft.STORMNET.Web
{
    using ICSSoft.Services;
    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET.Business.Audit;
    using ICSSoft.STORMNET.Web.AjaxControls;
    using Resources;

    using Microsoft.Practices.Unity;

    using NewPlatform.Flexberry.Services;
    using NewPlatform.Flexberry.Web.Themeable;
    using System;
    using Unity;

    /// <summary>
    /// Класс конфигурации сервисов приложения.
    /// </summary>
    public static class ServiceConfig
    {
        /// <summary>
        /// Метод для конфигурации всех сервисов прилоежния.
        /// </summary>
        public static void ConfigureServices()
        {
            IUnityContainer container = UnityFactory.CreateContainer();

            // Сервис аудита.
            AuditSetter.InitAuditService(DataServiceProvider.DataService);

            // Сервис тем оформления.
            //ThemeService.Current = container.Resolve<IThemeService>();

            // Настройки лукапа.
            BaseMasterEditorLookUp.ChangeLookUpSettings = ChangeLookUpSettings;

            // Менеджер расширенных ограничений.
            /*if (container.IsRegistered<IAdvLimitManager>())
                AdvLimitManager.Current = container.Resolve<IAdvLimitManager>();*/

            // Сервис настроек пользователя.
            /*if (container.IsRegistered<IUserSettingsService>())
                UserSettingsService.Current = container.Resolve<IUserSettingsService>();
            else
                LogService.LogWarn("IUserSettingsService не сконфигурирован в Unity. Будет использована реализация по умолчанию.");*/
        }


        /// <summary>
        /// Глобальный тюнер для изменения настроек лукапов.
        /// </summary>
        /// <param name="lookup">
        /// Лукап, настройки которого требуется изменить.
        /// </param>
        public static void ChangeLookUpSettings(BaseMasterEditorLookUp lookup)
        {
            try
            {
                Type type = Type.GetType(lookup.MasterTypeName);
                string caption = Information.GetClassCaption(type);
                lookup.LookUpFormCaption = !string.IsNullOrEmpty(caption) ? caption : Resource.Select_Value;
            }
            catch (Exception)
            {
                lookup.LookUpFormCaption = Resource.Select_Value;
            }
        }
    }
}