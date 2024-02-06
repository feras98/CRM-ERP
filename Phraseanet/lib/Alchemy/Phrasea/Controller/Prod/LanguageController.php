<?php
/*
 * This file is part of Phraseanet
 *
 * (c) 2005-2016 Alchemy
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Alchemy\Phrasea\Controller\Prod;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Translation\TranslatorInterface;

class LanguageController
{
    /** @var TranslatorInterface */
    private $translator;
    private $serverName;

    public function __construct(TranslatorInterface $translator, $serverName)
    {
        $this->translator = $translator;
        $this->serverName = $serverName;
    }

    public function getTranslationsAction()
    {
        $translator = $this->translator;

        return new JsonResponse([
            'serverName'              => $this->serverName,
            'archive'                 => $translator->trans('Archive'),
            'thesaurusBasesChanged'   => $translator->trans( 'prod::recherche: Attention : la liste des bases selectionnees pour la recherche a ete changee.'),
            'confirmDel'              => $translator->trans('paniers::Vous etes sur le point de supprimer ce panier. Cette action est irreversible. Souhaitez-vous continuer ?'),
            'serverError'             => $translator->trans('phraseanet::erreur: Une erreur est survenue, si ce probleme persiste, contactez le support technique'),
            'serverTimeout'           => $translator->trans('phraseanet::erreur: La connection au serveur Phraseanet semble etre indisponible'),
            'serverDisconnected'      => $translator->trans('phraseanet::erreur: Votre session est fermee, veuillez vous re-authentifier'),
            'hideMessage'             => $translator->trans('phraseanet::Ne plus afficher ce message'),
            'confirmGroup'    => $translator->trans('Supprimer egalement les documents rattaches a ces regroupements'),
            'confirmDelete'   => $translator->trans('reponses:: Ces enregistrements vont etre definitivement supprimes et ne pourront etre recuperes. Etes vous sur ?'),
            'cancel'          => $translator->trans('boutton::annuler'),
            'deleteTitle'     => $translator->trans('boutton::supprimer'),
            'deleteRecords'   => $translator->trans('Delete records'),
            'moveToTrash'     => $translator->trans('prod:app trash: title-trash'),
            'edit_hetero'     => $translator->trans('prod::editing valeurs heterogenes, choisir \'remplacer\', \'ajouter\' ou \'annuler\''),
            'confirm_abandon' => $translator->trans('prod::editing::annulation: abandonner les modification ?'),
            'loading'         => $translator->trans('phraseanet::chargement'),
            'valider'         => $translator->trans('boutton::valider'),
            'annuler'         => $translator->trans('boutton::annuler'),
            'create'                  => $translator->trans('boutton::creer'),
            'rechercher'              => $translator->trans('boutton::rechercher'),
            'renewRss'                => $translator->trans('boutton::renouveller'),
            'Publication'             => $translator->trans('prod::publication:title'),
            'candeletesome'           => $translator->trans('Vous n\'avez pas les droits pour supprimer certains documents'),
            'candeletedocuments'      => $translator->trans('Vous n\'avez pas les droits pour supprimer ces documents'),
            'needTitle'               => $translator->trans('Vous devez donner un titre'),
            'newPreset'               => $translator->trans('Nouveau modele'),
            'fermer'                  => $translator->trans('boutton::fermer'),
            'feed_require_fields'     => $translator->trans('Vous n\'avez pas rempli tous les champ requis'),
            'feed_require_feed'       => $translator->trans('Vous n\'avez pas selectionne de fil de publication'),
            'removeTitle'             => $translator->trans('panier::Supression d\'un element d\'un reportage'),
            'removeRecordFeedbackTitle' => $translator->trans('basket:feedback Delete item'),
            'feedbackSaveNotNotify'     => $translator->trans('feedback:: save users and users rights'),
            'feedbackSend'            => $translator->trans('feedback:: send'),
            'shareSendEmailTitle'     => $translator->trans('prod::workzone:manual send email share title'),
            'feedbackReminderTitle'   => $translator->trans('prod::workzone:manual feedback reminder title'),
            'reminderMessageToCheck'  => $translator->trans('prod::workzone:manual feedback reminder provide a message!'),
            'reminderParticipantToCheck' => $translator->trans('prod::workzone:manual feedback reminder select a participant!'),
            'removeExposePublication' => $translator->trans('expose::Your are about to delete a publication from expose, please confirm your action !'),
            'removeAssetPublication'  => $translator->trans('expose::Your are about to delete an asset from a publication, please confirm your action !'),
            'loggedIn'                => $translator->trans('expose:: Logged in'),
            'confirmRemoveReg'        => $translator->trans('panier::Attention, vous etes sur le point de supprimer un element du reportage. Merci de confirmer votre action.'),
            'confirmRemoveFeedBack'   => $translator->trans('basket:feedback Warning!You are about to delete one record from a feedback, please confirm your action'),
            'movedRecord'             => $translator->trans('basket:: Items are being to moved !'),
            'advsearch_title'         => $translator->trans('phraseanet::recherche avancee'),
            'bask_rename'             => $translator->trans('panier:: renommer le panier'),
            'reg_wrong_sbas'          => $translator->trans('panier:: Un reportage ne peux recevoir que des elements provenants de la base ou il est enregistre'),
            'error'                   => $translator->trans('phraseanet:: Erreur'),
            'warningDenyCgus'         => $translator->trans('cgus :: Attention, si vous refuser les CGUs de cette base, vous n\'y aures plus acces'),
            'cgusRelog'               => $translator->trans('cgus :: Vous devez vous reauthentifier pour que vos parametres soient pris en compte.'),
            'editDelMulti'            => $translator->trans('edit:: Supprimer %s du champ dans les records selectionnes'),
            'editAddMulti'            => $translator->trans('edit:: Ajouter %s au champ courrant pour les records selectionnes'),
            'editDelSimple'           => $translator->trans('edit:: Supprimer %s du champ courrant'),
            'editAddSimple'           => $translator->trans('edit:: Ajouter %s au champ courrant'),
            'cantDeletePublicOne'     => $translator->trans('panier:: vous ne pouvez pas supprimer un panier public'),
            'wrongsbas'               => $translator->trans('panier:: Un reportage ne peux recevoir que des elements provenants de la base ou il est enregistre'),
            'max_record_selected'     => $translator->trans('Vous ne pouvez pas selectionner plus de 800 enregistrements'),
            'confirmRedirectAuth'     => $translator->trans('invite:: Redirection vers la zone d\'authentification, cliquez sur OK pour continuer ou annulez'),
            'error_test_publi'        => $translator->trans('Erreur : soit les parametres sont incorrects, soit le serveur distant ne repond pas'),
            'test_publi_ok'           => $translator->trans('Les parametres sont corrects, le serveur distant est operationnel'),
            'some_not_published'      => $translator->trans('Certaines publications n\'ont pu etre effectuees, verifiez vos parametres'),
            'error_not_published'     => $translator->trans('Aucune publication effectuee, verifiez vos parametres'),
            'warning_delete_publi'    => $translator->trans('Attention, en supprimant ce preregalge, vous ne pourrez plus modifier ou supprimer de publications prealablement effectues avec celui-ci'),
            'some_required_fields'    => $translator->trans('edit::certains documents possedent des champs requis non remplis. Merci de les remplir pour valider votre editing'),
            'nodocselected'           => $translator->trans('Aucun document selectionne'),
            'sureToRemoveList'        => $translator->trans('Are you sure you want to delete this list ?'),
            'newListName'             => $translator->trans('New list name ?'),
            'listNameCannotBeEmpty'   => $translator->trans('List name can not be empty'),
            'FeedBackName'            => $translator->trans('Name'),
            'FeedBackMessage'         => $translator->trans('Message'),
            'FeedBackDuration'        => $translator->trans('Time for feedback (days)'),
            'FeedBackNameMandatory'   => $translator->trans('Please provide a name for this selection.'),
            'send'                    => $translator->trans('Send'),
            'Recept'                  => $translator->trans('Accuse de reception'),
            'nFieldsChanged'          => $translator->trans('%d fields have been updated'),
            'FeedBackNoUsersSelected' => $translator->trans('No users selected'),
            'FeedBackNoExpires'       => $translator->trans('prod:share:: No vote expires date'),
            'quitshareTitle'       => $translator->trans('prod:share:: quit share'),
            'confirmQuitshare'        => $translator->trans('prod:share:: you are about to quit a share basket!'),
            'errorFileApi'            => $translator->trans('An error occurred reading this file'),
            'errorFileApiTooBig'      => $translator->trans('This file is too big'),
            'selectOneRecord'         => $translator->trans('Please select one record'),
            'onlyOneRecord'           => $translator->trans('You can choose only one record'),
            'errorAjaxRequest'        => $translator->trans('An error occured, please retry'),
            'fileBeingDownloaded'     => $translator->trans('Some files are being downloaded'),
            'warning'               => $translator->trans('Attention'),
            'browserFeatureSupport' => $translator->trans('This feature is not supported by your browser'),
            'noActiveBasket'        => $translator->trans('No active basket'),
            'pushUserCanDownload'   => $translator->trans('User can download HD'),
            'feedbackCanContribute' => $translator->trans('User contribute to the feedback'),
            'feedbackCanSeeOthers'  => $translator->trans('User can see others choices'),
            'forceSendDocument'     => $translator->trans('Force sending of the document ?'),
            'export'                => $translator->trans('Export'),
            'share'                 => $translator->trans('Share'),
            'move'                  => $translator->trans('Move'),
            'push'                  => $translator->trans('Push'),
            'feedback'              => $translator->trans('Feedback'),
            'toolbox'               => $translator->trans('Tool box'),
            'videoEditor'           => $translator->trans('prod:edit: video-editor'),
            'print'                 => $translator->trans('Print'),
            'attention'             => $translator->trans('Attention !'),
            'mapMarkerEdit'         => $translator->trans('Edit position'),
            'mapMarkerAdd'          => $translator->trans('Add a position'),
            'Change position'       => $translator->trans('prod:mapbox Change position'),
            'mapMarkerMoveLabel'    => $translator->trans('Drag and drop the pin to move position'),
            'mapMarkerEditCancel'   => $translator->trans('Cancel'),
            'mapMarkerEditSubmit'   => $translator->trans('Submit'),
            'Keyboard shortcuts'    => $translator->trans('Keyboard shortcuts'),
            'Play'                  => $translator->trans('Play'),
            'Change play speed'     => $translator->trans('Change play speed'),
            'Pause'                 => $translator->trans('Pause'),
            'One frame forward'     => $translator->trans('One frame forward'),
            'One frame backward'    => $translator->trans('One frame backward'),
            'Add an entry point'    => $translator->trans('Add an entry point'),
            'Add an end point'        => $translator->trans('Add an end point'),
            'Navigate to entry point' => $translator->trans('Navigate to entry point'),
            'Navigate to end point'   => $translator->trans('Navigate to end point'),
            'Delete current'          => $translator->trans('Delete current'),
            'Toggle loop'             => $translator->trans('Toggle loop'),
            'Shift'                   => $translator->trans('Shift'),
            'Ctrl'                    => $translator->trans('Ctrl'),
            'Space bar'             => $translator->trans('Space bar'),
            'or'                    => $translator->trans('or'),
            'Suppr'                 => $translator->trans('Suppr'),
            'Add new range'         => $translator->trans('Add new range'),
            'Save as VTT'           => $translator->trans('Save as VTT'),
            'Export ranges'         => $translator->trans('Export ranges'),
            'Start Range'           => $translator->trans('Start Range'),
            'End Range'             => $translator->trans('End Range'),
            'Remove current Range'  => $translator->trans('Remove current Range'),
            'Go to start point'     => $translator->trans('Go to start point'),
            'Go 1 frame backward' => $translator->trans('Go 1 frame backward'),
            'Go 1 frame forward'  => $translator->trans('Go 1 frame forward'),
            'Go to end point'     => $translator->trans('Go to end point'),
            'Move up range'       => $translator->trans('Move up range'),
            'Move down range'     => $translator->trans('Move down range'),
            'error video editor'  => $translator->trans('prod:edit: only a media of type video can be edited'),
            'Chapters'            => $translator->trans('prod:edit: chapters'),
            'No hover to chapter' => $translator->trans('prod:edit: no overlaps for chapters'),
            'suggested_values'    => $translator->trans('prod:edit: suggested_values'),
            'title notice'        => $translator->trans('prod:mapboxgl: title notice'),
            'description notice'  => $translator->trans('prod:mapboxgl: description notice'),
            'title-map-dialog'    => $translator->trans('prod:mapboxgl: title map dialog'),
            'create new user'     => $translator->trans('prod:push: create new user'),
            'warning-multiple-databoxes' => $translator->trans('prod::story: warning! use only documents from one databox!'),
            'choose-collection'   =>  $translator->trans('prod::story: choose a collection to create a story!'),
            'mapboxjs title notice' => $translator->trans('prod:mapboxjs: title notice'),
            'mapboxjs description notice' => $translator->trans('prod:mapboxjs: description notice'),
            'mapboxjs title info' => $translator->trans('prod:mapboxjs: title info'),
            'mapboxjs description info' => $translator->trans('prod:mapboxjs: description info : right click to add position'),
            'mapboxgl title info' => $translator->trans('prod:mapboxgl: title info'),
            'mapboxgl description info' => $translator->trans('prod:mapboxgl: description info : right click to add position'),
            'prod:videoeditor:subtitletab:message:: error'     => $translator->trans('prod:videoeditor:subtitletab:message:: error'),
            'prod:videoeditor:subtitletab:message:: success'     => $translator->trans('prod:videoeditor:subtitletab:message:: success'),
            'Edit expose title'   => $translator->trans('prod:workzone:expose:modal:: title'),
            'ExposeMapping'       => $translator->trans('expose:: Expose mapping'),
            'ExposeChooseProfile'   => $translator->trans('expose:: Choose a profile where to store mapping'),
            'ExposeDuplicateValue'  => $translator->trans('expose::setting duplicate mapping!'),
            'DeleteList'          => $translator->trans('prod::listmanager Delete the list'),
            'buttonYes'           => $translator->trans('button::yes'),
            'buttonNo'            => $translator->trans('button::no'),
            'shareTitle'          => $translator->trans('prod::dialog sharebasket title'),
            'feedbackTitle'       => $translator->trans('prod::dialog feedback title'),
            'listmanagerTitle'    => $translator->trans('prod::dialog listmanager title'),
        ]);
    }
}