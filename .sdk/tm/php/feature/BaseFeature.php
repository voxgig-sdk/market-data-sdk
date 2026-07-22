<?php
declare(strict_types=1);

// MarketData SDK base feature

class MarketDataBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MarketDataContext $ctx, array $options): void {}
    public function PostConstruct(MarketDataContext $ctx): void {}
    public function PostConstructEntity(MarketDataContext $ctx): void {}
    public function SetData(MarketDataContext $ctx): void {}
    public function GetData(MarketDataContext $ctx): void {}
    public function GetMatch(MarketDataContext $ctx): void {}
    public function SetMatch(MarketDataContext $ctx): void {}
    public function PrePoint(MarketDataContext $ctx): void {}
    public function PreSpec(MarketDataContext $ctx): void {}
    public function PreRequest(MarketDataContext $ctx): void {}
    public function PreResponse(MarketDataContext $ctx): void {}
    public function PreResult(MarketDataContext $ctx): void {}
    public function PreDone(MarketDataContext $ctx): void {}
    public function PreUnexpected(MarketDataContext $ctx): void {}
}
