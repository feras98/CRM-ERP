<?php

/*
 * This file is part of the PHPExifTool package.
 *
 * (c) Alchemy <support@alchemy.fr>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace PHPExiftool\Driver\Tag\GSpherical;

use JMS\Serializer\Annotation\ExclusionPolicy;
use PHPExiftool\Driver\AbstractTag;

/**
 * @ExclusionPolicy("all")
 */
class FullPanoWidthPixels extends AbstractTag
{

    protected $Id = 'FullPanoWidthPixels';

    protected $Name = 'FullPanoWidthPixels';

    protected $FullName = 'XMP::GSpherical';

    protected $GroupName = 'GSpherical';

    protected $g0 = 'XMP';

    protected $g1 = 'XMP-GSpherical';

    protected $g2 = 'Image';

    protected $Type = 'integer';

    protected $Writable = true;

    protected $Description = 'Full Pano Width Pixels';

    protected $local_g1 = 'GSpherical';

    protected $flag_Avoid = true;

}
