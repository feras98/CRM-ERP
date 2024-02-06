<?php

namespace Alchemy\Phrasea\Model\Proxies\__CG__\Alchemy\Phrasea\Model\Entities;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class FeedEntry extends \Alchemy\Phrasea\Model\Entities\FeedEntry implements \Doctrine\ORM\Proxy\Proxy
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
            return ['__isInitialized__', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'id', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'title', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'subtitle', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'authorName', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'authorEmail', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'createdOn', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'updatedOn', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'items', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'publisher', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'feed', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'notifyEmailOn'];
        }

        return ['__isInitialized__', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'id', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'title', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'subtitle', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'authorName', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'authorEmail', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'createdOn', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'updatedOn', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'items', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'publisher', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'feed', '' . "\0" . 'Alchemy\\Phrasea\\Model\\Entities\\FeedEntry' . "\0" . 'notifyEmailOn'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (FeedEntry $proxy) {
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
    public function setTitle($title)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTitle', [$title]);

        return parent::setTitle($title);
    }

    /**
     * {@inheritDoc}
     */
    public function getTitle()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTitle', []);

        return parent::getTitle();
    }

    /**
     * {@inheritDoc}
     */
    public function setSubtitle($subtitle)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSubtitle', [$subtitle]);

        return parent::setSubtitle($subtitle);
    }

    /**
     * {@inheritDoc}
     */
    public function getSubtitle()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSubtitle', []);

        return parent::getSubtitle();
    }

    /**
     * {@inheritDoc}
     */
    public function setAuthorName($authorName)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAuthorName', [$authorName]);

        return parent::setAuthorName($authorName);
    }

    /**
     * {@inheritDoc}
     */
    public function getAuthorName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAuthorName', []);

        return parent::getAuthorName();
    }

    /**
     * {@inheritDoc}
     */
    public function setAuthorEmail($authorEmail)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAuthorEmail', [$authorEmail]);

        return parent::setAuthorEmail($authorEmail);
    }

    /**
     * {@inheritDoc}
     */
    public function getAuthorEmail()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAuthorEmail', []);

        return parent::getAuthorEmail();
    }

    /**
     * {@inheritDoc}
     */
    public function setCreatedOn($createdOn)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreatedOn', [$createdOn]);

        return parent::setCreatedOn($createdOn);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreatedOn()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreatedOn', []);

        return parent::getCreatedOn();
    }

    /**
     * {@inheritDoc}
     */
    public function setUpdatedOn($updatedOn)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUpdatedOn', [$updatedOn]);

        return parent::setUpdatedOn($updatedOn);
    }

    /**
     * {@inheritDoc}
     */
    public function getUpdatedOn()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUpdatedOn', []);

        return parent::getUpdatedOn();
    }

    /**
     * {@inheritDoc}
     */
    public function addItem(\Alchemy\Phrasea\Model\Entities\FeedItem $items)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addItem', [$items]);

        return parent::addItem($items);
    }

    /**
     * {@inheritDoc}
     */
    public function removeItem(\Alchemy\Phrasea\Model\Entities\FeedItem $items)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeItem', [$items]);

        return parent::removeItem($items);
    }

    /**
     * {@inheritDoc}
     */
    public function getItems()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getItems', []);

        return parent::getItems();
    }

    /**
     * {@inheritDoc}
     */
    public function setPublisher(\Alchemy\Phrasea\Model\Entities\FeedPublisher $publisher = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPublisher', [$publisher]);

        return parent::setPublisher($publisher);
    }

    /**
     * {@inheritDoc}
     */
    public function getPublisher()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPublisher', []);

        return parent::getPublisher();
    }

    /**
     * {@inheritDoc}
     */
    public function setFeed(\Alchemy\Phrasea\Model\Entities\Feed $feed = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFeed', [$feed]);

        return parent::setFeed($feed);
    }

    /**
     * {@inheritDoc}
     */
    public function getFeed()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFeed', []);

        return parent::getFeed();
    }

    /**
     * {@inheritDoc}
     */
    public function getNotifyEmailOn()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNotifyEmailOn', []);

        return parent::getNotifyEmailOn();
    }

    /**
     * {@inheritDoc}
     */
    public function setNotifyEmailOn($notifyEmailOn)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNotifyEmailOn', [$notifyEmailOn]);

        return parent::setNotifyEmailOn($notifyEmailOn);
    }

    /**
     * {@inheritDoc}
     */
    public function isPublisher(\Alchemy\Phrasea\Model\Entities\User $user)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isPublisher', [$user]);

        return parent::isPublisher($user);
    }

    /**
     * {@inheritDoc}
     */
    public function getItem($id)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getItem', [$id]);

        return parent::getItem($id);
    }

}