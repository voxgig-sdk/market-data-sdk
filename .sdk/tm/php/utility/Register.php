<?php
declare(strict_types=1);

// MarketData SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

MarketDataUtility::setRegistrar(function (MarketDataUtility $u): void {
    $u->clean = [MarketDataClean::class, 'call'];
    $u->done = [MarketDataDone::class, 'call'];
    $u->make_error = [MarketDataMakeError::class, 'call'];
    $u->feature_add = [MarketDataFeatureAdd::class, 'call'];
    $u->feature_hook = [MarketDataFeatureHook::class, 'call'];
    $u->feature_init = [MarketDataFeatureInit::class, 'call'];
    $u->fetcher = [MarketDataFetcher::class, 'call'];
    $u->make_fetch_def = [MarketDataMakeFetchDef::class, 'call'];
    $u->make_context = [MarketDataMakeContext::class, 'call'];
    $u->make_options = [MarketDataMakeOptions::class, 'call'];
    $u->make_request = [MarketDataMakeRequest::class, 'call'];
    $u->make_response = [MarketDataMakeResponse::class, 'call'];
    $u->make_result = [MarketDataMakeResult::class, 'call'];
    $u->make_point = [MarketDataMakePoint::class, 'call'];
    $u->make_spec = [MarketDataMakeSpec::class, 'call'];
    $u->make_url = [MarketDataMakeUrl::class, 'call'];
    $u->param = [MarketDataParam::class, 'call'];
    $u->prepare_auth = [MarketDataPrepareAuth::class, 'call'];
    $u->prepare_body = [MarketDataPrepareBody::class, 'call'];
    $u->prepare_headers = [MarketDataPrepareHeaders::class, 'call'];
    $u->prepare_method = [MarketDataPrepareMethod::class, 'call'];
    $u->prepare_params = [MarketDataPrepareParams::class, 'call'];
    $u->prepare_path = [MarketDataPreparePath::class, 'call'];
    $u->prepare_query = [MarketDataPrepareQuery::class, 'call'];
    $u->result_basic = [MarketDataResultBasic::class, 'call'];
    $u->result_body = [MarketDataResultBody::class, 'call'];
    $u->result_headers = [MarketDataResultHeaders::class, 'call'];
    $u->transform_request = [MarketDataTransformRequest::class, 'call'];
    $u->transform_response = [MarketDataTransformResponse::class, 'call'];
});
