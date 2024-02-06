<?php

namespace Alchemy\Phrasea\Model\Proxies\__CG__\Alchemy\Phrasea\Model\Entities;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class User extends \Alchemy\Phrasea\Model\Entities\User implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Persistence\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = [];



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'id', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'login', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'email', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'password', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'nonce', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'saltedPassword', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'firstName', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'lastName', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'gender', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'address', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'city', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'country', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'zipCode', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'geonameId', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'locale', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'timezone', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'job', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'activity', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'company', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'phone', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'fax', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'admin', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'guest', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'mailNotificationsActivated', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'requestNotificationsActivated', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'ldapCreated', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'lastAppliedTemplate', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'pushList', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'canChangeProfil', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'canChangeFtpProfil', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'lastConnection', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'mailLocked', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'deleted', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'created', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'updated', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'templateOwner', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'ftpCredential', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'queries', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'settings', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'notificationSettings', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'grantedApi', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'nbInactivityEmail', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'lastInactivityEmail'];
        }

        return ['__isInitialized__', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'id', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'login', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'email', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'password', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'nonce', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'saltedPassword', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'firstName', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'lastName', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'gender', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'address', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'city', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'country', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'zipCode', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'geonameId', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'locale', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'timezone', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'job', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'activity', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'company', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'phone', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'fax', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'admin', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'guest', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'mailNotificationsActivated', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'requestNotificationsActivated', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'ldapCreated', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'lastAppliedTemplate', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'pushList', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'canChangeProfil', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'canChangeFtpProfil', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'lastConnection', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'mailLocked', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'deleted', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'created', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'updated', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'templateOwner', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'ftpCredential', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'queries', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'settings', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'notificationSettings', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'grantedApi', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'nbInactivityEmail', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\User' . "\0" . 'lastInactivityEmail'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (User $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getId()
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function getLogin()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLogin', []);

        return parent::getLogin();
    }

    /**
     * {@inheritDoc}
     */
    public function setLogin($login)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLogin', [$login]);

        return parent::setLogin($login);
    }

    /**
     * {@inheritDoc}
     */
    public function getEmail()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getEmail', []);

        return parent::getEmail();
    }

    /**
     * {@inheritDoc}
     */
    public function setEmail($email)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setEmail', [$email]);

        return parent::setEmail($email);
    }

    /**
     * {@inheritDoc}
     */
    public function getPassword()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPassword', []);

        return parent::getPassword();
    }

    /**
     * {@inheritDoc}
     */
    public function setPassword($password)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPassword', [$password]);

        return parent::setPassword($password);
    }

    /**
     * {@inheritDoc}
     */
    public function getNonce()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNonce', []);

        return parent::getNonce();
    }

    /**
     * {@inheritDoc}
     */
    public function setNonce($nonce)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNonce', [$nonce]);

        return parent::setNonce($nonce);
    }

    /**
     * {@inheritDoc}
     */
    public function isSaltedPassword()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isSaltedPassword', []);

        return parent::isSaltedPassword();
    }

    /**
     * {@inheritDoc}
     */
    public function setSaltedPassword($saltedPassword)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSaltedPassword', [$saltedPassword]);

        return parent::setSaltedPassword($saltedPassword);
    }

    /**
     * {@inheritDoc}
     */
    public function getFirstName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFirstName', []);

        return parent::getFirstName();
    }

    /**
     * {@inheritDoc}
     */
    public function setFirstName($firstName)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFirstName', [$firstName]);

        return parent::setFirstName($firstName);
    }

    /**
     * {@inheritDoc}
     */
    public function getLastName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLastName', []);

        return parent::getLastName();
    }

    /**
     * {@inheritDoc}
     */
    public function setLastName($lastName)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLastName', [$lastName]);

        return parent::setLastName($lastName);
    }

    /**
     * {@inheritDoc}
     */
    public function getGender()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getGender', []);

        return parent::getGender();
    }

    /**
     * {@inheritDoc}
     */
    public function setGender($gender)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setGender', [$gender]);

        return parent::setGender($gender);
    }

    /**
     * {@inheritDoc}
     */
    public function getAddress()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAddress', []);

        return parent::getAddress();
    }

    /**
     * {@inheritDoc}
     */
    public function setAddress($address)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAddress', [$address]);

        return parent::setAddress($address);
    }

    /**
     * {@inheritDoc}
     */
    public function getCity()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCity', []);

        return parent::getCity();
    }

    /**
     * {@inheritDoc}
     */
    public function setCity($city)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCity', [$city]);

        return parent::setCity($city);
    }

    /**
     * {@inheritDoc}
     */
    public function getCountry()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCountry', []);

        return parent::getCountry();
    }

    /**
     * {@inheritDoc}
     */
    public function setCountry($country)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCountry', [$country]);

        return parent::setCountry($country);
    }

    /**
     * {@inheritDoc}
     */
    public function getZipCode()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getZipCode', []);

        return parent::getZipCode();
    }

    /**
     * {@inheritDoc}
     */
    public function setZipCode($zipCode)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setZipCode', [$zipCode]);

        return parent::setZipCode($zipCode);
    }

    /**
     * {@inheritDoc}
     */
    public function getGeonameId()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getGeonameId', []);

        return parent::getGeonameId();
    }

    /**
     * {@inheritDoc}
     */
    public function setGeonameId($geonameId)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setGeonameId', [$geonameId]);

        return parent::setGeonameId($geonameId);
    }

    /**
     * {@inheritDoc}
     */
    public function getLocale()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLocale', []);

        return parent::getLocale();
    }

    /**
     * {@inheritDoc}
     */
    public function setLocale($locale)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLocale', [$locale]);

        return parent::setLocale($locale);
    }

    /**
     * {@inheritDoc}
     */
    public function getTimezone()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTimezone', []);

        return parent::getTimezone();
    }

    /**
     * {@inheritDoc}
     */
    public function setTimezone($timezone)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTimezone', [$timezone]);

        return parent::setTimezone($timezone);
    }

    /**
     * {@inheritDoc}
     */
    public function getJob()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getJob', []);

        return parent::getJob();
    }

    /**
     * {@inheritDoc}
     */
    public function setJob($job)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setJob', [$job]);

        return parent::setJob($job);
    }

    /**
     * {@inheritDoc}
     */
    public function getActivity()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getActivity', []);

        return parent::getActivity();
    }

    /**
     * {@inheritDoc}
     */
    public function setActivity($activity)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setActivity', [$activity]);

        return parent::setActivity($activity);
    }

    /**
     * {@inheritDoc}
     */
    public function getCompany()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCompany', []);

        return parent::getCompany();
    }

    /**
     * {@inheritDoc}
     */
    public function setCompany($company)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCompany', [$company]);

        return parent::setCompany($company);
    }

    /**
     * {@inheritDoc}
     */
    public function getPhone()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPhone', []);

        return parent::getPhone();
    }

    /**
     * {@inheritDoc}
     */
    public function setPhone($phone)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPhone', [$phone]);

        return parent::setPhone($phone);
    }

    /**
     * {@inheritDoc}
     */
    public function getFax()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFax', []);

        return parent::getFax();
    }

    /**
     * {@inheritDoc}
     */
    public function setFax($fax)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFax', [$fax]);

        return parent::setFax($fax);
    }

    /**
     * {@inheritDoc}
     */
    public function isAdmin()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isAdmin', []);

        return parent::isAdmin();
    }

    /**
     * {@inheritDoc}
     */
    public function setAdmin($admin)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAdmin', [$admin]);

        return parent::setAdmin($admin);
    }

    /**
     * {@inheritDoc}
     */
    public function isGuest()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isGuest', []);

        return parent::isGuest();
    }

    /**
     * {@inheritDoc}
     */
    public function setGuest($guest)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setGuest', [$guest]);

        return parent::setGuest($guest);
    }

    /**
     * {@inheritDoc}
     */
    public function hasMailNotificationsActivated()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'hasMailNotificationsActivated', []);

        return parent::hasMailNotificationsActivated();
    }

    /**
     * {@inheritDoc}
     */
    public function setMailNotificationsActivated($mailNotifications)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMailNotificationsActivated', [$mailNotifications]);

        return parent::setMailNotificationsActivated($mailNotifications);
    }

    /**
     * {@inheritDoc}
     */
    public function hasRequestNotificationsActivated()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'hasRequestNotificationsActivated', []);

        return parent::hasRequestNotificationsActivated();
    }

    /**
     * {@inheritDoc}
     */
    public function setRequestNotificationsActivated($requestNotifications)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setRequestNotificationsActivated', [$requestNotifications]);

        return parent::setRequestNotificationsActivated($requestNotifications);
    }

    /**
     * {@inheritDoc}
     */
    public function hasLdapCreated()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'hasLdapCreated', []);

        return parent::hasLdapCreated();
    }

    /**
     * {@inheritDoc}
     */
    public function setLdapCreated($ldapCreated)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLdapCreated', [$ldapCreated]);

        return parent::setLdapCreated($ldapCreated);
    }

    /**
     * {@inheritDoc}
     */
    public function getTemplateOwner()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTemplateOwner', []);

        return parent::getTemplateOwner();
    }

    /**
     * {@inheritDoc}
     */
    public function setTemplateOwner(\Alchemy\Phrasea\Model\Entities\User $owner)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTemplateOwner', [$owner]);

        return parent::setTemplateOwner($owner);
    }

    /**
     * {@inheritDoc}
     */
    public function getLastAppliedTemplate()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLastAppliedTemplate', []);

        return parent::getLastAppliedTemplate();
    }

    /**
     * {@inheritDoc}
     */
    public function setLastAppliedTemplate(\Alchemy\Phrasea\Model\Entities\User $lastAppliedTemplate)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLastAppliedTemplate', [$lastAppliedTemplate]);

        return parent::setLastAppliedTemplate($lastAppliedTemplate);
    }

    /**
     * {@inheritDoc}
     */
    public function getPushList()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPushList', []);

        return parent::getPushList();
    }

    /**
     * {@inheritDoc}
     */
    public function setPushList($pushList)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPushList', [$pushList]);

        return parent::setPushList($pushList);
    }

    /**
     * {@inheritDoc}
     */
    public function canChangeProfil()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'canChangeProfil', []);

        return parent::canChangeProfil();
    }

    /**
     * {@inheritDoc}
     */
    public function setCanChangeProfil($canChangeProfil)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCanChangeProfil', [$canChangeProfil]);

        return parent::setCanChangeProfil($canChangeProfil);
    }

    /**
     * {@inheritDoc}
     */
    public function canChangeFtpProfil()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'canChangeFtpProfil', []);

        return parent::canChangeFtpProfil();
    }

    /**
     * {@inheritDoc}
     */
    public function setCanChangeFtpProfil($canChangeFtpProfil)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCanChangeFtpProfil', [$canChangeFtpProfil]);

        return parent::setCanChangeFtpProfil($canChangeFtpProfil);
    }

    /**
     * {@inheritDoc}
     */
    public function getLastConnection()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLastConnection', []);

        return parent::getLastConnection();
    }

    /**
     * {@inheritDoc}
     */
    public function setLastConnection(\DateTime $lastConnection)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLastConnection', [$lastConnection]);

        return parent::setLastConnection($lastConnection);
    }

    /**
     * {@inheritDoc}
     */
    public function isMailLocked()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isMailLocked', []);

        return parent::isMailLocked();
    }

    /**
     * {@inheritDoc}
     */
    public function setMailLocked($mailLocked)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMailLocked', [$mailLocked]);

        return parent::setMailLocked($mailLocked);
    }

    /**
     * {@inheritDoc}
     */
    public function isDeleted()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isDeleted', []);

        return parent::isDeleted();
    }

    /**
     * {@inheritDoc}
     */
    public function setDeleted($deleted)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDeleted', [$deleted]);

        return parent::setDeleted($deleted);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreated()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreated', []);

        return parent::getCreated();
    }

    /**
     * {@inheritDoc}
     */
    public function getUpdated()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUpdated', []);

        return parent::getUpdated();
    }

    /**
     * {@inheritDoc}
     */
    public function setCreated(\DateTime $created)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreated', [$created]);

        return parent::setCreated($created);
    }

    /**
     * {@inheritDoc}
     */
    public function setUpdated(\DateTime $updated)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUpdated', [$updated]);

        return parent::setUpdated($updated);
    }

    /**
     * {@inheritDoc}
     */
    public function getFtpCredential()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFtpCredential', []);

        return parent::getFtpCredential();
    }

    /**
     * {@inheritDoc}
     */
    public function setFtpCredential(\Alchemy\Phrasea\Model\Entities\FtpCredential $ftpCredential = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFtpCredential', [$ftpCredential]);

        return parent::setFtpCredential($ftpCredential);
    }

    /**
     * {@inheritDoc}
     */
    public function getQueries()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getQueries', []);

        return parent::getQueries();
    }

    /**
     * {@inheritDoc}
     */
    public function addQuery(\Alchemy\Phrasea\Model\Entities\UserQuery $query)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addQuery', [$query]);

        return parent::addQuery($query);
    }

    /**
     * {@inheritDoc}
     */
    public function getSettings()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSettings', []);

        return parent::getSettings();
    }

    /**
     * {@inheritDoc}
     */
    public function addSetting(\Alchemy\Phrasea\Model\Entities\UserSetting $setting)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addSetting', [$setting]);

        return parent::addSetting($setting);
    }

    /**
     * {@inheritDoc}
     */
    public function getNotificationSettings()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNotificationSettings', []);

        return parent::getNotificationSettings();
    }

    /**
     * {@inheritDoc}
     */
    public function addNotificationSettings(\Alchemy\Phrasea\Model\Entities\UserNotificationSetting $notificationSetting)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addNotificationSettings', [$notificationSetting]);

        return parent::addNotificationSettings($notificationSetting);
    }

    /**
     * {@inheritDoc}
     */
    public function hasGrantedApi()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'hasGrantedApi', []);

        return parent::hasGrantedApi();
    }

    /**
     * {@inheritDoc}
     */
    public function setGrantedApi($grantedApi)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setGrantedApi', [$grantedApi]);

        return parent::setGrantedApi($grantedApi);
    }

    /**
     * {@inheritDoc}
     */
    public function setNbInactivityEmail($nbEnactivityEmail)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNbInactivityEmail', [$nbEnactivityEmail]);

        return parent::setNbInactivityEmail($nbEnactivityEmail);
    }

    /**
     * {@inheritDoc}
     */
    public function getNbInactivityEmail()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNbInactivityEmail', []);

        return parent::getNbInactivityEmail();
    }

    /**
     * {@inheritDoc}
     */
    public function setLastInactivityEmail($lastInactivityEmail)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLastInactivityEmail', [$lastInactivityEmail]);

        return parent::setLastInactivityEmail($lastInactivityEmail);
    }

    /**
     * {@inheritDoc}
     */
    public function getLastInactivityEmail()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLastInactivityEmail', []);

        return parent::getLastInactivityEmail();
    }

    /**
     * {@inheritDoc}
     */
    public function isTemplate()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isTemplate', []);

        return parent::isTemplate();
    }

    /**
     * {@inheritDoc}
     */
    public function isSpecial()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isSpecial', []);

        return parent::isSpecial();
    }

    /**
     * {@inheritDoc}
     */
    public function getDisplayName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDisplayName', []);

        return parent::getDisplayName();
    }

}